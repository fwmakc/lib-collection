Структура данных коллекция.

Библиотка javascript/typescript (ES6) для node.js.

- ключ:значение,
- индексированный массив,
- последовательное чтение,
- чтение в обратном порядке,
- стек и очередь,
- быстрый поиск.

# Установка

```
npm install lib-collection
```

или

```
yarn add lib-collection
```

Затем

```
import { Collection } from 'lib-collection';
```

# Конструктор

Класс Collection.

При создании передается путь к файлу, относительный или полный.

Пример:

```
const collection = new Collection();
```

> Создание класса не гарантирует наличие файла по заданному пути.

Не забудьте проверить существование файла и открыть поток для чтения или записи.

# Методы

**constructor(elements: CollectionType | undefined = undefined)**

Создаёт экземпляр коллекции.

```
@param {CollectionType} [elements] - Элементы коллекции.
```

**clear(): void**

Очищает коллекцию.

```
@returns {void}
```

**delete(key: string): void**

Удаляет элемент из коллекции по ключу.

```
@param {string} key - Ключ удаляемого элемента.
@returns {void}
```

**deleteByIndex(index: number): void**

Удаляет элемент из коллекции по его индексу.

```
@param {number} index - Индекс удаляемого элемента.
@returns {void}
```

**empty(): boolean**

Проверяет, пуста ли коллекция.

```
@returns {boolean} True, если коллекция пуста, false в противном случае.
```

**get(key: string): any**

Возвращает значение, связанное с ключом.

```
@param {string} key - ключ извлекаемого элемента.
@returns {any} Значение, связанное с ключом.
```

**getByIndex(index: number): any**

Возвращает значение по указанному индексу.

```
@param {number} index - индекс извлекаемого элемента.
@returns {any} Значение по указанному индексу.
```

**includes(key: string): boolean**

Проверяет, существует ли ключ в коллекции.

```
@param {string} key - ключ для проверки.
@returns {boolean} True, если ключ существует, иначе false.
```

**keys(): Array<string>**

Возвращает все ключи в коллекции.

```
@returns {Array<string>} Массив ключей.
```

**length(): number**

Возвращает количество элементов в коллекции.

```
@returns {number} Длина коллекции.
```

**pop(): any**

Удаляет и возвращает последний элемент из коллекции.

```
@returns {any} Удалённое значение.
```

**push(key: string, value: any): void**

Добавляет новую пару ключ-значение в коллекцию.

```
@param {string} key - Ключ элемента.
@param {any} value - Значение элемента.
@returns {void}
```

**shift(): any**

Удаляет и возвращает первый элемент из коллекции.

```
@returns {any} Удалённое значение.
```

**unshift(key: string, value: any): void**

Добавляет новую пару ключ-значение в начало коллекции.

```
@param {string} key - Ключ элемента.
@param {any} value — значение элемента.
@returns {void}
```

**values(): Array<any>**

Возвращает все значения в коллекции.

```
@returns {Array<any>} Массив значений.
```

**every(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): boolean**

Выполняет указанную функцию один раз для каждой пары «ключ-значение» в коллекции.

```
@param {function} callback — функция, выполняемая для каждого элемента.
@param {any} [thisArg] — значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {boolean} True, если обратный вызов возвращает истинное значение для каждого элемента; в противном случае — false.
```

**filter(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): Array<any>**

Создаёт массив со всеми парами ключ-значение, прошедшими проверку, реализованную предоставленной функцией.

```
@param {function} callback — Функция для проверки каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any>} Новый массив с элементами, прошедшими проверку.
```

**find(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): Array<any> | undefined**

Возвращает первый элемент, удовлетворяющий предоставленной функции проверки.

```
@param {function} callback — Функция для проверки каждого элемента.
@param {any} [thisArg] — значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any> | undefined} Массив, содержащий значение и ключ первого совпадающего элемента, или undefined, если ни один элемент не совпадает.
```

**findReversed(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): Array<any> | undefined**

Возвращает первый элемент, удовлетворяющий тестовой функции, начиная с конца коллекции.

```
@param {function} callback — функция для проверки каждого элемента.
@param {any} [thisArg] — значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any> | undefined} Массив, содержащий значение и ключ первого совпадающего элемента, или undefined, если ни один элемент не совпадает.
```

**forEach(callback: (value: any, key: string, index: number) => void, thisArg?: any): void**

Выполняет предоставленную функцию один раз для каждой пары ключ-значение в коллекции.

```
@param {function} callback — Функция, выполняемая для каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {void}
```

**forEachReversed(callback: (value: any, key: string, index: number) => void, thisArg?: any): void**

Выполняет предоставленную функцию один раз для каждой пары ключ-значение в коллекции, начиная с end.

```
@param {function} callback — Функция, выполняемая для каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {void}
```

**map(callback: (value: any, key: string, index: number) => any, thisArg?: any): Array<any>**

Создаёт новый массив, заполненный результатами вызова предоставленной функции для каждой пары ключ-значение в коллекции.

```
@param {function} callback — Функция, вызываемая для каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any>} Новый массив с результатами вызова обратного вызова для каждого элемента.
```

**some(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): boolean**

Проверяет, проходит ли хотя бы один элемент коллекции тест, реализованный предоставленной функцией.

```
@param {function} callback — Функция для проверки каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {boolean} True, если хотя бы один элемент проходит тест; в противном случае — false.
```

# Лицензия

Лицензия MIT, 2025
