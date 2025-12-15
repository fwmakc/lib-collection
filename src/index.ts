/**
 * Represents collection with various operations for managing key-value pairs.
 * @typedef {Object} CollectionType
 * @property {string} [key] - Value associated with key in collection.
 */
interface CollectionType<T> {
  [key: string]: T;
}

/**
 * Array of key-value pairs where key is string and value is any type.
 * @typedef {[string, any][]} EntriesType
 */

type EntriesType<T> = [string, T][];

/**
 * Class representing collection with various operations such as manipulations with arrays and objects.
 */
export class Collection<T> {
  /** @type {CollectionType} */
  protected collection: Map<string, T>;

  /**
   * Creates instance of Collection.
   * @param {CollectionType} [elements] - Elements of collection.
   */
  constructor(elements: CollectionType<T> | undefined = undefined) {
    this.collection = new Map(elements ? Object.entries(elements) : undefined);
  }

  /**
   * Data extraction methods
   */

  /**
   * Returns all elements from collection.
   * @returns {CollectionType} Elements of collection.
   */
  elements(): CollectionType<T> {
    return Object.fromEntries(this.collection.entries());
  }

  /**
   * Returns all elements from collection as array of key-value pair.
   * @returns {EntriesType<T>} Elements of collection as key-value pair array.
   */
  entries(): EntriesType<T> {
    return [...this.collection.entries()];
  }

  /**
   * Returns all keys in collection.
   * @returns {string[]} Array of keys.
   */
  keys(): string[] {
    return [...this.collection.keys()];
  }

  /**
   * Returns number of elements in collection.
   * @returns {number} Length of collection.
   */
  length(): number {
    return this.collection.size;
  }

  /**
   * Returns all values in collection.
   * @returns {T[]} Array of values.
   */
  values(): T[] {
    return [...this.collection.values()];
  }

  /**
   * Simple operation methods
   */

  /**
   * Append and replace object in collection.
   * @param {Object} obj - Object to be added. Keys will be replaced if exist.
   * @returns {Collection<T>}
   */
  add(obj: CollectionType<T>): Collection<T> {
    for (const [key, value] of Object.entries(obj)) {
      this.collection.set(key, value);
    }
    return this;
  }

  /**
   * Add and replace elements in collection from array of key-value pairs.
   * @param {EntriesType<T>} pairs - Array to be added. Keys will be replaced if exist.
   * @returns {Collection<T>}
   */
  addByEntries(pairs: EntriesType<T>): Collection<T> {
    if (!pairs || !Array.isArray(pairs) || !pairs?.length) {
      return this;
    }
    for (const pair of pairs) {
      if (!pair || !Array.isArray(pair) || !pair?.length) {
        continue;
      }
      const [key, value] = pair;
      this.collection.set(key, value);
    }
    return this;
  }

  /**
   * Clears collection.
   * @returns {Collection<T>}
   */
  clear(): Collection<T> {
    this.collection.clear();
    return this;
  }

  /**
   * Deletes element from collection by key.
   * @param {string} key - Key of element to be deleted.
   * @returns {Collection<T>}
   */
  delete(key: string): Collection<T> {
    this.collection.delete(key);
    return this;
  }

  /**
   * Deletes element from collection by its index.
   * @param {number} index - Index of element to be deleted.
   * @returns {Collection<T>}
   */
  deleteByIndex(index: number): Collection<T> {
    const key = this.keys().at(index) as string;
    this.collection.delete(key);
    return this;
  }

  /**
   * Checks if collection is empty.
   * @returns {boolean} True if collection is empty, false otherwise.
   */
  empty(): boolean {
    return !this.collection.size;
  }

  /**
   * Retrieves value associated with key.
   * @param {string} key - Key of element to retrieve.
   * @returns {T} Value associated with key.
   */
  get(key: string): T | undefined {
    return this.collection.get(key);
  }

  /**
   * Retrieves value at specified index.
   * @param {number} index - Index of element to retrieve.
   * @returns {T} Value at specified index.
   */
  getByIndex(index: number): T | undefined {
    const key = this.keys().at(index) as string;
    return this.collection.get(key);
  }

  /**
   * Checks if key exists in collection.
   * @param {string} key - Key to check.
   * @returns {boolean} True if key exists, false otherwise.
   */
  includes(key: string): boolean {
    return this.collection.has(key);
  }

  /**
   * Clear and set object in collection.
   * @param {CollectionType} elements - Object to be added. Keys will be replaced if exist.
   * @returns {Collection<T>}
   */
  set(elements: CollectionType<T>): Collection<T> {
    this.collection = new Map(Object.entries(elements));
    return this;
  }

  /**
   * Append and replace collection from array of key-value pairs.
   * @param {EntriesType<T>} pairs - Array to be added. Keys will be replaced if exist.
   * @returns {Collection<T>}
   */
  setByEntries(pairs: EntriesType<T>): Collection<T> {
    this.collection = new Map(pairs);
    return this;
  }

  /**
   * Methods of order changing collection elements
   */

  private moveElement(
    keyFrom: string,
    keyTo: string,
    type: 'after' | 'before',
  ): void {
    if (
      !this.collection.has(keyFrom) ||
      (keyTo && !this.collection.has(keyTo))
    ) {
      return;
    }

    const entries = this.entries();
    const moveIdx = entries.findIndex(([k]) => k === keyFrom);

    if (moveIdx === -1) return;

    const element = entries[moveIdx]!;
    entries.splice(moveIdx, 1);

    if (keyTo === null) {
      if (type === 'after') {
        entries.unshift(element); // После null = в начало
      } else {
        entries.push(element); // Перед null = в конец
      }
    } else {
      const targetIdx = entries.findIndex(([k]) => k === keyTo);
      if (targetIdx === -1) return;

      const insertIdx = type === 'after' ? targetIdx + 1 : targetIdx;
      entries.splice(insertIdx, 0, element);
    }

    this.collection = new Map(entries);
  }

  /**
   * Moves element to position after specified key.
   * @param {string} keyFrom - Element key to move.
   * @param {string} keyTo - Key after which element should be placed.
   * @returns {Collection<T>}
   */
  moveAfter(keyFrom: string, keyTo: string): Collection<T> {
    this.moveElement(keyFrom, keyTo, 'after');
    return this;
  }

  /**
   * Moves element to position before specified key.
   * @param {string} keyFrom - Element key to move.
   * @param {string} keyTo - Key before which element should be placed.
   * @returns {Collection<T>}
   */
  moveBefore(keyFrom: string, keyTo: string): Collection<T> {
    this.moveElement(keyFrom, keyTo, 'before');
    return this;
  }

  /**
   * Renames element in list.
   * If old name does not exist in list, method does nothing.
   * @param {string} oldName - Current name of item to be renamed.
   * @param {string} newName - New name to assign to item.
   * @returns {Collection<T>}
   */
  rename(oldKey: string, newKey: string): Collection<T> {
    if (oldKey === newKey || !this.collection.has(oldKey)) {
      return this;
    }

    if (this.collection.has(newKey)) {
      this.delete(newKey);
    }

    const entries = this.entries();

    const index = entries.findIndex(([key]) => key === oldKey);

    if (index < 0) {
      return this;
    }

    entries[index]![0] = newKey;

    this.collection = new Map(entries);

    return this;
  }

  /**
   * Stack and queue methods
   */

  /**
   * Removes and returns last element from collection.
   * @returns {T} Removed value.
   */
  pop(): T | undefined {
    if (!this.length) {
      return;
    }
    const key = this.keys().at(-1) as string;
    const value = this.collection.get(key);
    this.collection.delete(key);
    return value;
  }

  /**
   * Adds new key-value pair to collection.
   * @param {string} key - Key of element.
   * @param {T} value - Value of element.
   * @returns {void}
   */
  push(key: string, value: T): void {
    if (!key) {
      return;
    }
    this.collection.delete(key);
    this.collection.set(key, value);
  }

  /**
   * Removes and returns first element from collection.
   * @returns {T} Removed value.
   */
  shift(): T | undefined {
    if (!this.length) {
      return;
    }
    const key = this.keys().at(0) as string;
    const value = this.collection.get(key);
    this.collection.delete(key);
    return value;
  }

  /**
   * Adds new key-value pair to beginning of collection.
   * @param {string} key - Key of element.
   * @param {T} value - Value of element.
   * @returns {void}
   */
  unshift(key: string, value: T): void {
    if (!key) {
      return;
    }
    this.collection.delete(key);
    this.collection = new Map([[key, value], ...this.collection]);
  }

  /**
   * Iterate methods
   */

  /**
   * Checks whether all elements satisfy condition
   * @param predicate Predicate function
   * @returns true if all elements satisfy condition
   */
  every(predicate: (value: T, key: string, index: number) => boolean): boolean {
    let index = 0;

    for (const [key, value] of this.collection) {
      if (!predicate(value, key, index)) {
        return false;
      }
      index += 1;
    }

    return true;
  }

  /**
   * Creates new collection with elements that pass validation
   * @param callback Function for validating elements
   * @returns New collection with filtered elements
   */
  filter(
    callback: (value: T, key: string, index: number) => boolean,
  ): Collection<T> {
    const result = new Collection<T>();
    let index = 0;

    for (const [key, value] of this.collection) {
      if (callback(value, key, index)) {
        result.collection.set(key, value);
      }
      index += 1;
    }

    return result;
  }

  /**
   * Returns first element that satisfies provided testing function.
   * @param {function} callback - Function to test each element.
   * @returns {CollectionType<T> | undefined} Array containing value and key of first matching element, or undefined if no element matches.
   */
  find(
    callback: (value: T, key: string, index: number) => boolean,
  ): CollectionType<T> | undefined {
    if (!this.length()) {
      return;
    }

    let index = 0;

    for (const [key, value] of this.collection) {
      if (callback(value, key, index)) {
        return { [key]: value };
      }
      index += 1;
    }

    return;
  }

  /**
   * Returns first element that satisfies provided testing function.
   * @param {function} callback - Function to test each element.
   * @returns {CollectionType<T> | undefined} Array containing value and key of first matching element, or undefined if no element matches.
   */
  findReversed(
    callback: (value: T, key: string, index: number) => boolean,
  ): CollectionType<T> | undefined {
    if (!this.length()) {
      return;
    }

    const entries = this.entries();

    for (let i = this.length() - 1; i >= 0; i--) {
      const [key, value] = entries[i]!;
      if (callback(value, key, i)) {
        return { [key]: value };
      }
    }

    return;
  }

  /**
   * Executes function for each element of collection
   * @param predicate Function to call for each element
   * @returns {Collection<T>}
   */
  forEach(
    predicate: (value: T, key: string, index: number) => void,
  ): Collection<T> {
    let index = 0;

    for (const [key, value] of this.collection) {
      predicate(value, key, index);
      index += 1;
    }

    return this;
  }

  /**
   * Executes function for each element of collection
   * @param predicate Function to call for each element
   * @returns {Collection<T>}
   */
  forEachReversed(
    predicate: (value: T, key: string, index: number) => void,
  ): Collection<T> {
    const entries = this.entries();

    for (let i = this.length() - 1; i >= 0; i--) {
      const [key, value] = entries[i]!;
      predicate(value, key, i);
    }

    return this;
  }

  /**
   * Creates new collection with transformed values
   * @param transform Transformation function
   * @returns New collection with transformed values
   */
  map<U>(
    transform: (value: T, key: string, index: number) => U,
  ): Collection<U> {
    const result = new Collection<U>();
    let index = 0;

    for (const [key, value] of this.collection) {
      result.collection.set(key, transform(value, key, index));
      index += 1;
    }

    return result;
  }

  /**
   * Condense collection into single value
   * @param reducer Reducer function
   * @param initialValue Initial accumulator value
   * @returns Result of condense
   */
  reduce<U>(
    reducer: (
      accumulator: U | undefined,
      value: T,
      key: string,
      index: number,
    ) => U,
    initialValue?: U,
  ): U | undefined {
    let accumulator = initialValue;
    let index = 0;

    for (const [key, value] of this.collection) {
      accumulator = reducer(accumulator, value, key, index);
      index += 1;
    }

    return accumulator;
  }

  /**
   * Checks whether at least one element satisfies condition
   * @param predicate Predicate function
   * @returns true if at least one element satisfies condition
   */
  some(predicate: (value: T, key: string, index: number) => boolean): boolean {
    let index = 0;

    for (const [key, value] of this.collection) {
      if (predicate(value, key, index)) {
        return true;
      }
      index += 1;
    }

    return false;
  }

  /**
   * Returns iterable object for collection.
   * @returns {Iterator} Iterator that yields [value, key, index].
   */
  *[Symbol.iterator](): IterableIterator<[T, string]> {
    for (const [key, value] of this.collection) {
      yield [value, key];
    }
  }

  /**
   * Controls implicit transform to primitives
   * @override
   * @param {unknown} hint - Transform type
   * @returns {string|number} Transform result
   */
  [Symbol.toPrimitive](hint: unknown): string | number {
    if (hint === 'number') return this.length();
    return this.toString();
  }

  /**
   * Returns string representation for Node.js
   * @override
   * @param {unknown} depth
   * @param {unknown} options
   * @returns {string} Transform result
   */
  [Symbol.for('nodejs.util.inspect.custom')]?(
    _depth: unknown,
    _options: unknown,
  ): string {
    return this.toString();
  }

  /**
   * Object.prototype.toString
   * @type {string}
   */
  get [Symbol.toStringTag](): string {
    return 'Collection';
  }

  /**
   * Returns string representation
   * @override
   * @returns {string} string representation
   */
  toString(): string {
    let elements: unknown;
    try {
      elements = JSON.stringify(this.elements());
    } catch (_err) {
      elements = null;
    }
    return `Collection ${elements}`;
  }

  /**
   * Return JSON.stringify representation
   * @override
   * @returns {string} string representation
   */
  toJSON(): string {
    try {
      return JSON.stringify(this.elements());
    } catch (_err) {
      return 'null';
    }
  }
}
