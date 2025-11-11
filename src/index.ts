/**
 * Represents collection with various operations for managing key-value pairs.
 * @typedef {Object} CollectionType
 * @property {any} [key] - Value associated with key in collection.
 */
type CollectionType<T> = {
  [key: string]: T;
};

/**
 * Class representing collection with various operations such as manipulations with arrays and objects.
 */
export class Collection<T> {
  /** @type {Array<string>} */
  protected list: Array<string> = [];

  /** @type {CollectionType} */
  protected collection: CollectionType<T> = {};

  /**
   * Returns all elements from collection.
   * @returns {CollectionType} Elements of collection.
   */
  get elements(): CollectionType<T> {
    return this.collection;
  }

  /**
   * Set object in collection.
   * @param {Object} obj - Object to be set.
   */
  set elements(obj: CollectionType<T>) {
    this.clear();
    if (!obj || typeof obj !== 'object') {
      return;
    }
    this.list = [...Object.keys(obj)];
    this.collection = { ...obj };
  }

  /**
   * Returns all elements from collection as array of key-value pair.
   * @returns {Array<Array<any> | undefined>} Elements of collection as key-value pair array.
   */
  get entries(): Array<Array<any> | undefined> {
    const length = this.list.length;
    const result: Array<any> = [];
    if (!length) {
      return result;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      result.push([key, value]);
    }
    return result;
  }

  /**
   * Set elements in collection from array of key-value pairs.
   * @param {Array<Array<any> | undefined>} pairs - Array to be set.
   */
  set entries(pairs: Array<Array<any> | undefined>) {
    this.clear();
    if (!pairs || !Array.isArray(pairs) || !pairs?.length) {
      return;
    }
    for (const pair of pairs) {
      if (!pair || !Array.isArray(pair) || !pair?.length) {
        continue;
      }
      const [keyPair, value] = pair;
      const key = String(keyPair);
      this.collection[key] = value;
      this.list.push(key);
    }
  }

  /**
   * Returns all keys in collection.
   * @returns {Array<string>} Array of keys.
   */
  get keys(): Array<string> {
    return [...this.list];
  }

  /**
   * Returns number of elements in collection.
   * @returns {number} Length of collection.
   */
  get length(): number {
    return this.list.length;
  }

  /**
   * Returns all values in collection.
   * @returns {Array<T>} Array of values.
   */
  get values(): Array<T> {
    const values: Array<T> = [];
    if (!this.list.length) {
      return values;
    }
    this.list.forEach((key) => {
      values.push(this.collection[key]);
    });
    return values;
  }

  /**
   * Creates instance of Collection.
   * @param {CollectionType} [elements] - Elements of collection.
   */
  constructor(elements: CollectionType<T> | undefined = undefined) {
    if (!elements) {
      return;
    }

    Object.create(null);

    this.collection = elements;
    this.list = Object.keys(elements);
  }

  /**
   * Returns iterable object for collection.
   * @returns {Iterator} Iterator that yields [value, key, index].
   */
  [Symbol.iterator]() {
    let index = 0;
    const elements = this.list;
    const values = this.collection;

    return {
      next() {
        if (index < elements.length) {
          const key = elements[index];
          const val = values[key];
          index += 1;
          return { value: [val, key, index - 1], done: false };
        } else {
          return { value: [], done: true };
        }
      },
    };
  }

  /**
   * Append and replace object in collection.
   * @param {Object} obj - Object to be added. Keys will be replaced if exist.
   */
  add(obj: CollectionType<T>) {
    if (!obj || typeof obj !== 'object') {
      return;
    }
    this.list = [...this.list, ...Object.keys(obj)];
    this.collection = {
      ...this.collection,
      ...obj,
    };
  }

  /**
   * Add and replace elements in collection from array of key-value pairs.
   * @param {Array<Array<any> | undefined>} pairs - Array to be added. Keys will be replaced if exist.
   */
  addEntries(pairs: Array<Array<any> | undefined>) {
    if (!pairs || !Array.isArray(pairs) || !pairs?.length) {
      return;
    }
    for (const pair of pairs) {
      if (!pair || !Array.isArray(pair) || !pair?.length) {
        continue;
      }
      const [keyPair, value] = pair;
      const key = String(keyPair);
      this.collection[key] = value;
      if (!this.list.includes(key)) {
        this.list.push(key);
      }
    }
  }

  /**
   * Clears collection.
   * @returns {void}
   */
  clear(): void {
    this.list = [];
    this.collection = {};
  }

  /**
   * Deletes element from collection by key.
   * @param {string} key - Key of element to be deleted.
   * @returns {void}
   */
  delete(key: string): void {
    const index = this.list.indexOf(key);
    if (index < 0) {
      return;
    }
    this.list.splice(index, 1);
    delete this.collection[key];
  }

  /**
   * Deletes element from collection by its index.
   * @param {number} index - Index of element to be deleted.
   * @returns {void}
   */
  deleteByIndex(index: number): void {
    const length = this.list.length;
    if (index < 0) {
      index = length + index;
    }
    if (index < 0 || index > length) {
      return;
    }
    const key = this.list[index];
    this.list.splice(index, 1);
    delete this.collection[key];
  }

  /**
   * Checks if collection is empty.
   * @returns {boolean} True if collection is empty, false otherwise.
   */
  empty(): boolean {
    return !this.list.length;
  }

  /**
   * Retrieves value associated with key.
   * @param {string} key - Key of element to retrieve.
   * @returns {any} Value associated with key.
   */
  get(key: string): T | undefined {
    return this.collection[key];
  }

  /**
   * Retrieves value at specified index.
   * @param {number} index - Index of element to retrieve.
   * @returns {any} Value at specified index.
   */
  getByIndex(index: number): T | undefined {
    const length = this.list.length;
    if (index < 0) {
      index = length + index;
    }
    if (index < 0 || index > length) {
      return;
    }
    const key = this.list[index];
    if (!key) {
      return;
    }
    return this.collection[key];
  }

  private move(keyFrom: string, keyTo: string, type: 'after' | 'before'): void {
    const fromIndex = this.list.indexOf(keyFrom);
    const toIndex = this.list.indexOf(keyTo);
    const length = this.list.length;

    if (
      fromIndex === toIndex ||
      fromIndex < 0 ||
      fromIndex >= length ||
      toIndex < 0 ||
      toIndex >= length
    ) {
      return;
    }

    const [element] = this.list.splice(fromIndex, 1);

    let koeff = 0;

    if (type === 'after' && toIndex < fromIndex) {
      koeff = 1;
    }
    if (type === 'before' && toIndex >= fromIndex) {
      koeff = -1;
    }

    this.list.splice(toIndex + koeff, 0, element);
  }

  /**
   * Moves element to position after specified key.
   * @param {string} keyFrom - Element key to move.
   * @param {string} keyTo - Key after which element should be placed.
   * @returns {void}
   */
  moveAfter(keyFrom: string, keyTo: string): void {
    this.move(keyFrom, keyTo, 'after');
  }

  /**
   * Moves element to position before specified key.
   * @param {string} keyFrom - Element key to move.
   * @param {string} keyTo - Key before which element should be placed.
   * @returns {void}
   */
  moveBefore(keyFrom: string, keyTo: string): void {
    this.move(keyFrom, keyTo, 'before');
  }

  /**
   * Renames element in list.
   * If old name does not exist in list, method does nothing.
   * @param {string} oldName - Current name of item to be renamed.
   * @param {string} newName - New name to assign to item.
   * @returns {void}
   */
  rename(oldName: string, newName: string): void {
    const targetIndex = this.list.indexOf(oldName);
    const existsIndex = this.list.indexOf(newName);
    if (targetIndex < 0) {
      return;
    }
    if (existsIndex >= 0) {
      this.list.splice(existsIndex, 1);
    }
    this.list[targetIndex] = newName;
    this.collection[newName] = this.collection[oldName];
    delete this.collection[oldName];
  }

  /**
   * Removes and returns last element from collection.
   * @returns {any} Removed value.
   */
  pop(): T | undefined {
    const key = this.list.pop();
    if (!key) {
      return;
    }
    const value = this.collection[key];
    delete this.collection[key];
    return value;
  }

  /**
   * Adds new key-value pair to collection.
   * @param {string} key - Key of element.
   * @param {any} value - Value of element.
   * @returns {void}
   */
  push(key: string, value: T): void {
    if (!key) {
      return;
    }
    this.delete(key);
    this.list.push(key);
    this.collection[key] = value;
  }

  /**
   * Removes and returns first element from collection.
   * @returns {any} Removed value.
   */
  shift(): T | undefined {
    const key = this.list.shift();
    if (!key) {
      return;
    }
    const value = this.collection[key];
    delete this.collection[key];
    return value;
  }

  /**
   * Adds new key-value pair to beginning of collection.
   * @param {string} key - Key of element.
   * @param {any} value - Value of element.
   * @returns {void}
   */
  unshift(key: string, value: T): void {
    if (!key) {
      return;
    }
    this.delete(key);
    this.list.unshift(key);
    this.collection[key] = value;
  }

  /**
   * Executes provided function once for each key-value pair in collection.
   * @param {function} callback - Function to execute for each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {boolean} True if callback returns truthy value for every element; otherwise, false.
   */
  every(
    callback: (value: T, key: string, index: number) => boolean,
    thisArg?: any,
  ): boolean {
    const length = this.list.length;
    if (!length) {
      return false;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      if (!callback.call(thisArg, value, key, index)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Creates array with all key-value pairs that pass test implemented by provided function.
   * @param {function} callback - Function to test each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {Array<any>} New array with elements that pass test.
   */
  filter(
    callback: (value: T, key: string, index: number) => boolean,
    thisArg?: any,
  ): Array<any> {
    const length = this.list.length;
    const result: Array<any> = [];
    if (!length) {
      return result;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      if (callback.call(thisArg, value, key, index)) {
        result.push([value, key]);
      }
    }
    return result;
  }

  /**
   * Returns first element that satisfies provided testing function.
   * @param {function} callback - Function to test each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {Array<any> | undefined} Array containing value and key of first matching element, or undefined if no element matches.
   */
  find(
    callback: (value: T, key: string, index: number) => boolean,
    thisArg?: any,
  ): Array<any> | undefined {
    const length = this.list.length;
    if (!length) {
      return;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      if (callback.call(thisArg, value, key, index)) {
        return [value, key];
      }
    }
    return;
  }

  /**
   * Returns first element that satisfies testing function, starting from end of collection.
   * @param {function} callback - Function to test each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {Array<any> | undefined} Array containing value and key of first matching element, or undefined if no element matches.
   */
  findReversed(
    callback: (value: T, key: string, index: number) => boolean,
    thisArg?: any,
  ): Array<any> | undefined {
    const length = this.list.length;
    if (!length) {
      return;
    }
    for (let index = length - 1; index >= 0; index--) {
      const key = this.list[index];
      const value = this.collection[key];
      if (callback.call(thisArg, value, key, index)) {
        return [value, key];
      }
    }
    return;
  }

  /**
   * Executes provided function once for each key-value pair in collection.
   * @param {function} callback - Function to execute for each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {void}
   */
  forEach(
    callback: (value: T, key: string, index: number) => void,
    thisArg?: any,
  ): void {
    const length = this.list.length;
    if (!length) {
      return;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      callback.call(thisArg, value, key, index);
    }
  }

  /**
   * Executes provided function once for each key-value pair in collection, starting from end.
   * @param {function} callback - Function to execute for each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {void}
   */
  forEachReversed(
    callback: (value: T, key: string, index: number) => void,
    thisArg?: any,
  ): void {
    const length = this.list.length;
    if (!length) {
      return;
    }
    for (let index = length - 1; index >= 0; index--) {
      const key = this.list[index];
      const value = this.collection[key];
      callback.call(thisArg, value, key, index);
    }
  }

  /**
   * Checks if key exists in collection.
   * @param {string} key - Key to check.
   * @returns {boolean} True if key exists, false otherwise.
   */
  includes(key: string): boolean {
    return this.list.includes(key);
  }

  /**
   * Creates new array populated with results of calling provided function on every key-value pair in collection.
   * @param {function} callback - Function to call on each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {Array<any>} New array with results of calling callback on every element.
   */
  map(
    callback: (value: T, key: string, index: number) => any,
    thisArg?: any,
  ): Array<any> {
    const length = this.list.length;
    const result: Array<any> = new Array(length);
    if (!length) {
      return result;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      result[index] = callback.call(thisArg, value, key, index);
    }
    return result;
  }

  /**
   * Tests whether at least one element in collection passes test implemented by provided function.
   * @param {function} callback - Function to test each element.
   * @param {any} [thisArg] - Value to use as `this` when executing callback.
   * @returns {boolean} True if at least one element passes test; otherwise, false.
   */
  some(
    callback: (value: T, key: string, index: number) => boolean,
    thisArg?: any,
  ): boolean {
    const length = this.list.length;
    if (!length) {
      return false;
    }
    for (let index = 0; index < length; index++) {
      const key = this.list[index];
      const value = this.collection[key];
      if (callback.call(thisArg, value, key, index)) {
        return true;
      }
    }
    return false;
  }
}
