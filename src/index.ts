/**
 * Represents collection with various operations for managing key-value pairs.
 * @typedef {Object} CollectionType
 * @property {any} [key] - Value associated with key in collection.
 */
interface CollectionType<T> {
  [key: string]: T;
}

/**
 * Array of key-value pairs where key is string and value is any type.
 * @typedef {[string, unknown][]} EntriesType
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EntriesType = [string, any][];

/**
 * Class representing collection with various operations such as manipulations with arrays and objects.
 */
export class Collection<T> {
  /** @type {CollectionType} */
  protected collection: Map<string, T>;

  /**
   * Returns all elements from collection.
   * @returns {CollectionType} Elements of collection.
   */
  get elements(): CollectionType<T> {
    const a = Object.fromEntries(this.entries);
    console.log(a);
    return a;
  }

  /**
   * Set object in collection.
   * @param {Object} obj - Object to be set.
   */
  set elements(obj: CollectionType<T>) {
    this.entries = Object.entries(obj);
  }

  /**
   * Returns all elements from collection as array of key-value pair.
   * @returns {EntriesType} Elements of collection as key-value pair array.
   */
  get entries(): EntriesType {
    return [...this.collection.entries()];
  }

  /**
   * Set elements in collection from array of key-value pairs.
   * @param {EntriesType} pairs - Array to be set.
   */

  set entries(pairs: EntriesType) {
    this.collection.clear();
    for (const [key, value] of pairs) {
      this.collection.set(key, value);
    }
  }

  /**
   * Returns all keys in collection.
   * @returns {string[]} Array of keys.
   */
  get keys(): string[] {
    return [...this.collection.keys()];
  }

  /**
   * Returns number of elements in collection.
   * @returns {number} Length of collection.
   */
  get length(): number {
    return this.collection.size;
  }

  /**
   * Returns all values in collection.
   * @returns {T[]} Array of values.
   */
  get values(): T[] {
    return [...this.collection.values()];
  }

  /**
   * Creates instance of Collection.
   * @param {CollectionType} [elements] - Elements of collection.
   */
  constructor(elements: CollectionType<T> | undefined = undefined) {
    this.collection = new Map(elements ? Object.entries(elements) : undefined);
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
   * Append and replace object in collection.
   * @param {Object} obj - Object to be added. Keys will be replaced if exist.
   */
  add(obj: CollectionType<T>): void {
    for (const [key, item] of Object.entries(obj)) {
      this.collection.set(key, item);
    }
  }

  /**
   * Append and replace object in collection.
   * @param {Object} obj - Object to be added. Keys will be replaced if exist.
   */
  addEntries(entries: EntriesType): void {
    for (const [key, item] of entries) {
      this.collection.set(key, item);
    }
  }

  /**
   * Clears collection.
   * @returns {void}
   */
  clear(): void {
    this.collection.clear();
  }

  /**
   * Deletes element from collection by key.
   * @param {string} key - Key of element to be deleted.
   * @returns {void}
   */
  delete(key: string): void {
    this.collection.delete(key);
  }

  /**
   * Deletes element from collection by its index.
   * @param {number} index - Index of element to be deleted.
   * @returns {void}
   */
  deleteByIndex(index: number): void {
    const key = this.keys.at(index) as string;
    this.collection.delete(key);
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
   * @returns {any} Value associated with key.
   */
  get(key: string): T | undefined {
    return this.collection.get(key);
  }

  /**
   * Retrieves value at specified index.
   * @param {number} index - Index of element to retrieve.
   * @returns {any} Value at specified index.
   */
  getByIndex(index: number): T | undefined {
    const key = this.keys.at(index) as string;
    return this.collection.get(key);
  }

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

    const entries = Array.from(this.collection.entries());
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
   * @returns {void}
   */
  moveAfter(keyFrom: string, keyTo: string): void {
    this.moveElement(keyFrom, keyTo, 'after');
  }

  /**
   * Moves element to position before specified key.
   * @param {string} keyFrom - Element key to move.
   * @param {string} keyTo - Key before which element should be placed.
   * @returns {void}
   */
  moveBefore(keyFrom: string, keyTo: string): void {
    this.moveElement(keyFrom, keyTo, 'before');
  }

  /**
   * Renames element in list.
   * If old name does not exist in list, method does nothing.
   * @param {string} oldName - Current name of item to be renamed.
   * @param {string} newName - New name to assign to item.
   * @returns {void}
   */
  rename(oldKey: string, newKey: string): void {
    if (oldKey === newKey || !this.collection.has(oldKey)) {
      return;
    }

    if (this.collection.has(newKey)) {
      this.delete(newKey);
    }

    const entries = [...this.collection.entries()];

    const index = entries.findIndex(([key]) => key === oldKey);

    if (index < 0) {
      return;
    }

    entries[index]![0] = newKey;

    this.collection = new Map(entries);
  }

  /**
   * Removes and returns last element from collection.
   * @returns {any} Removed value.
   */
  pop(): T | undefined {
    if (!this.length) {
      return;
    }
    const key = this.keys.at(-1) as string;
    const value = this.collection.get(key);
    this.collection.delete(key);
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
    this.collection.delete(key);
    this.collection.set(key, value);
  }

  /**
   * Removes and returns first element from collection.
   * @returns {any} Removed value.
   */
  shift(): T | undefined {
    if (!this.length) {
      return;
    }
    const key = this.keys.at(0) as string;
    const value = this.collection.get(key);
    this.collection.delete(key);
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
    this.collection.delete(key);
    this.collection = new Map([[key, value], ...this.collection]);
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
   * Выполняет функцию для каждого элемента коллекции
   * @param callback Функция, вызываемая для каждого элемента
   * @param thisArg Значение this для callback
   * @returns Текущая коллекция для чейнинга
   */
  forEach(
    callback: (value: T, key: string, collection: this) => void,
    thisArg?: unknown,
  ): this {
    for (const [key, value] of this.collection) {
      callback.call(thisArg, value, key, this);
    }
    return this;
  }

  /**
   * Выполняет функцию для каждого элемента коллекции
   * @param callback Функция, вызываемая для каждого элемента
   * @param thisArg Значение this для callback
   * @returns Текущая коллекция для чейнинга
   */
  forEachReversed(
    callback: (value: T, key: string, collection: this) => void,
    thisArg?: unknown,
  ): this {
    const entries = Array.from(this.collection.entries());

    // Идем с конца массива к началу
    for (let i = entries.length - 1; i >= 0; i--) {
      const [key, value] = entries[i]!;
      callback.call(thisArg, value, key, this);
    }

    return this;
  }

  /**
   * Создает новую коллекцию с элементами, прошедшими проверку
   * @param predicate Функция-предикат для проверки элементов
   * @param thisArg Значение this для predicate
   * @returns Новая коллекция с отфильтрованными элементами
   */
  filter(
    predicate: (value: T, key: string, collection: this) => boolean,
    thisArg?: unknown,
  ): Collection<T> {
    const result = new Collection<T>();

    for (const [key, value] of this.collection) {
      if (predicate.call(thisArg, value, key, this)) {
        result.collection.set(key, value);
      }
    }

    return result;
  }

  /**
   * Создает новую коллекцию с преобразованными значениями
   * @param transform Функция преобразования
   * @param thisArg Значение this для transform
   * @returns Новая коллекция с преобразованными значениями
   */
  map<U>(
    transform: (value: T, key: string, collection: this) => U,
    thisArg?: unknown,
  ): Collection<U> {
    const result = new Collection<U>();

    for (const [key, value] of this.collection) {
      result.collection.set(key, transform.call(thisArg, value, key, this));
    }

    return result;
  }

  /**
   * Reduce - свертка коллекции в одно значение
   * @param reducer Функция-редьюсер
   * @param initialValue Начальное значение аккумулятора
   * @returns Результат свертки
   */
  reduce<U>(
    reducer: (accumulator: U, value: T, key: string, collection: this) => U,
    initialValue: U,
  ): U {
    let accumulator = initialValue;

    for (const [key, value] of this.collection) {
      accumulator = reducer(accumulator, value, key, this);
    }

    return accumulator;
  }

  /**
   * Some - проверяет, удовлетворяет ли хотя бы один элемент условию
   * @param predicate Функция-предикат
   * @param thisArg Значение this для predicate
   * @returns true если хотя бы один элемент удовлетворяет условию
   */
  some(
    predicate: (value: T, key: string, collection: this) => boolean,
    thisArg?: unknown,
  ): boolean {
    for (const [key, value] of this.collection) {
      if (predicate.call(thisArg, value, key, this)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Every - проверяет, удовлетворяют ли все элементы условию
   * @param predicate Функция-предикат
   * @param thisArg Значение this для predicate
   * @returns true если все элементы удовлетворяют условию
   */
  every(
    predicate: (value: T, key: string, collection: this) => boolean,
    thisArg?: unknown,
  ): boolean {
    for (const [key, value] of this.collection) {
      if (!predicate.call(thisArg, value, key, this)) {
        return false;
      }
    }
    return true;
  }
}
