# Описание

Библиотека представляет работу со структурой данных "коллекция".

Коллекция - это объект, содержащий пары ключ-значение, но с ним можно работать как с массивом:

- итерация по every, for / for...of, forEach, map,
- фильтрация по filter,
- поиск по includes, find, some,
- реверсивные методы findReversed, forEachReversed,
- добавление по push, unshift,
- добавление по delete, pop, shift.

Библиотка javascript/typescript (ES6) для node.js.

Большинство операций оптимизировано по скорости работы.

- ключ:значение,
- индексированный массив,
- итерирование в обратном порядке,
- стек и очередь,
- быстрый поиск,
- методы forEach, map, filter.

# Пример

Импортируем библиотеку:

```
import { Collection } from 'lib-collection';
```

Создадим коллекцию:

```
const collection = new Collection({
    a: 11,
    b: 22,
    c: 33,
});
```

Добавим новый элемент:

```
collection.push('d', 44);
```

Сделаем простое итерирование:

```
for (const [value, key] of collection) {
    console.log({ key, value });
}
```

# Свойства

## **elements: CollectionType**

Возвращает все элементы коллекции в виде объекта пар ключ-значение.
Заново заполняет коллекцию из объекта пар ключ-значение.

```
@returns {CollectionType} Elements of collection.
```

## **entries: Array<Array<any> | undefined>**

Возвращает все элементы коллекции в виде массива пар ключ-значение.
Заново заполняет коллекцию из массива пар ключ-значение.

```
@returns {Array<Array<any> | undefined>} Elements of collection as key-value pair array.
```

## **keys: Array<string>**

Возвращает все ключи в коллекции.

```
@returns {Array<string>} Массив ключей.
```

## **length: number**

Возвращает количество элементов в коллекции.

```
@returns {number} Длина коллекции.
```

## **values: Array<any>**

Возвращает все значения в коллекции.

```
@returns {Array<any>} Массив значений.
```

# Методы

## **constructor(elements: CollectionType | undefined = undefined)**

Создаёт экземпляр коллекции.

```
@param {CollectionType} [elements] - Элементы коллекции.
```

## **add(obj: CollectionType)**

Добавляет с заменой элементы в коллекцию из объекта ключ-значение.

```
@param {Object} obj - Объект.
```

## **addEntries(pairs: Array<Array<any> | undefined>)**

Добавляет с заменой элементы в коллекцию из массива ключ-значение.

```
@param {Array<Array<any> | undefined>} pairs - Массив.
```

## **clear(): void**

Очищает коллекцию.

```
@returns {void}
```

## **delete(key: string): void**

Удаляет элемент из коллекции по ключу.

```
@param {string} key - Ключ удаляемого элемента.
@returns {void}
```

## **deleteByIndex(index: number): void**

Удаляет элемент из коллекции по его индексу.

```
@param {number} index - Индекс удаляемого элемента.
@returns {void}
```

## **empty(): boolean**

Проверяет, пуста ли коллекция.

```
@returns {boolean} True, если коллекция пуста, false в противном случае.
```

## **get(key: string): any**

Возвращает значение, связанное с ключом.

```
@param {string} key - ключ извлекаемого элемента.
@returns {any} Значение, связанное с ключом.
```

## **getByIndex(index: number): any**

Возвращает значение по указанному индексу.

```
@param {number} index - индекс извлекаемого элемента.
@returns {any} Значение по указанному индексу.
```

## **moveAfter(keyFrom: string, keyTo: string): void**

Перемещает элемент коллекции после указанным.

```
@param {string} keyFrom - Element key to move.
@param {string} keyTo - Key after which element should be placed.
@returns {void}
```

## **moveBefore(keyFrom: string, keyTo: string): void**

Перемещает элемент коллекции перед указанным.

```
@param {string} keyFrom - Element key to move.
@param {string} keyTo - Key before which element should be placed.
@returns {void}
```

## **rename(oldName: string, newName: string): void**

Переименовывает ключ элемента.

```
@param {string} oldName - Current name of item to be renamed.
@param {string} newName - New name to assign to item.
@returns {void}
```

## **pop(): any**

Удаляет и возвращает последний элемент из коллекции.

```
@returns {any} Удалённое значение.
```

## **push(key: string, value: any): void**

Добавляет новую пару ключ-значение в коллекцию.

```
@param {string} key - Ключ элемента.
@param {any} value - Значение элемента.
@returns {void}
```

## **shift(): any**

Удаляет и возвращает первый элемент из коллекции.

```
@returns {any} Удалённое значение.
```

## **unshift(key: string, value: any): void**

Добавляет новую пару ключ-значение в начало коллекции.

```
@param {string} key - Ключ элемента.
@param {any} value — значение элемента.
@returns {void}
```

## **every(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): boolean**

Выполняет указанную функцию один раз для каждой пары ключ-значение в коллекции.

```
@param {function} callback — функция, выполняемая для каждого элемента.
@param {any} [thisArg] — значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {boolean} True, если обратный вызов возвращает истинное значение для каждого элемента; в противном случае — false.
```

## **filter(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): Array<any>**

Создаёт массив со всеми парами ключ-значение, прошедшими проверку, реализованную предоставленной функцией.

```
@param {function} callback — Функция для проверки каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any>} Новый массив с элементами, прошедшими проверку.
```

## **find(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): Array<any> | undefined**

Возвращает первый элемент, удовлетворяющий предоставленной функции проверки.

```
@param {function} callback — Функция для проверки каждого элемента.
@param {any} [thisArg] — значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any> | undefined} Массив, содержащий значение и ключ первого совпадающего элемента, или undefined, если ни один элемент не совпадает.
```

## **findReversed(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): Array<any> | undefined**

Возвращает первый элемент, удовлетворяющий тестовой функции, начиная с конца коллекции.

```
@param {function} callback — функция для проверки каждого элемента.
@param {any} [thisArg] — значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any> | undefined} Массив, содержащий значение и ключ первого совпадающего элемента, или undefined, если ни один элемент не совпадает.
```

## **forEach(callback: (value: any, key: string, index: number) => void, thisArg?: any): void**

Выполняет предоставленную функцию один раз для каждой пары ключ-значение в коллекции.

```
@param {function} callback — Функция, выполняемая для каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {void}
```

## **forEachReversed(callback: (value: any, key: string, index: number) => void, thisArg?: any): void**

Выполняет предоставленную функцию один раз для каждой пары ключ-значение в коллекции, начиная с end.

```
@param {function} callback — Функция, выполняемая для каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {void}
```

## **includes(key: string): boolean**

Проверяет, существует ли ключ в коллекции.

```
@param {string} key - ключ для проверки.
@returns {boolean} True, если ключ существует, иначе false.
```

## **map(callback: (value: any, key: string, index: number) => any, thisArg?: any): Array<any>**

Создаёт новый массив, заполненный результатами вызова предоставленной функции для каждой пары ключ-значение в коллекции.

```
@param {function} callback — Функция, вызываемая для каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {Array<any>} Новый массив с результатами вызова обратного вызова для каждого элемента.
```

## **some(callback: (value: any, key: string, index: number) => boolean, thisArg?: any): boolean**

Проверяет, проходит ли хотя бы один элемент коллекции тест, реализованный предоставленной функцией.

```
@param {function} callback — Функция для проверки каждого элемента.
@param {any} [thisArg] — Значение, используемое в качестве `this` при выполнении обратного вызова.
@returns {boolean} True, если хотя бы один элемент проходит тест; в противном случае — false.
```

# Особенности поведения

Коллекция всегда является упорядоченной структурой.

Метод **push** гарантирует добавление элементов в строгом порядке.

Если при этом в коллекции встречается элемент с заданным ключом, то вместо него создается новый элемент, который добавляется в конец структуры.

Метод **unshift** действует аналогичным образом, только элементы добавляются в начало структуры.

Через методы **add** и **addEntries** элементы добавляются в конец структуры.

При этом, если в коллекции уже существует элемент с заданным ключом, то только заменяется его значение. Сам элемент не меняет своего положения.

Свойства **entries**, **keys** и **value** возвращают копии элементов структуры. На подготовку идут дополнительные расходы по памяти и времени.

Свойство **entries** возвращает массив пар ключ-значение. При этом оно гарантирует строгое сохранение порядка элементов.

Свойство **elements** возвращает ссылку на элементы структуры и является более легким.

Свойство **elements** возвращает объект пар ключ-значение, но не гарантирует сохранение того же порядка элементов, что и в коллекции.

Это происходит из-за поведения самих объектов в js. Например, объект

```
{ 2: 'a', 3: 'b', 1: 'c' };
```

Автоматически пример вид

```
{ 1: 'c', 2: 'a', 3: 'b' }
```

Если вы хотите создать структуру в изначальном порядке, вам нужно заполнять ее элементами последовательно:

```
collection.push('2', 'a');
collection.push('3', 'b');
collection.push('1', 'c');
```

Или использовать массив пар ключ-значение:

```
const pairs = [[2, 'a'], [3, 'b'], [1, 'c']];
collection.entries = pairs;
```

Библиотека использует объекты вместо структуры данных **Map**. По нашим тестам, на текущий момент, это решение является более легким.

# Рабочий пример

Давайте сделаем что-нибудь более веселое и приближенное к реальным задачам. Например, коллекцию котиков.

```
import { Collection } from 'lib-collection';

type CatsColors = 'black' | 'red' | 'white' | 'gray' | 'tricolor';

type CatsGenders = 'boy' | 'girl';

interface ICat {
  name: string;
  age: number;
  color?: CatsColors;
  gender?: CatsGenders;
};

const catsCollection = new Collection();
```

Давайте заведем пару котиков.

Помните, коллекция - это как именованный (ассоциативный) массив. Значит, каждая запись должна иметь ключ. Пусть ключом будет имя котика.

```
const cats = {
  Барсик: {
    name: 'Барсик',
    age: 1,
  },
  Пушок: {
    name: 'Пушок',
    age: 2,
  },
};
```

Можем их добавить в коллекцию:

```
catsCollection.add(cats);
```

А можем перезаписать через элементы:

```
catsCollection.elements = cats;
```

Предположим, котики представлены массивом объектов:

```
const cats = [
  {
    name: 'Барсик',
    age: 1,
  },
  {
    name: 'Пушок',
    age: 2,
  },
];
```

Мы можем записать их последовательно:

```
cats.forEach((cat) => {
  catsCollection.push(cat.name, cat);
});
```

Можно ли массив так же просто добавить в коллекцию? Конечно. Но тогда ключами станут индексы. В этом нет смысла, потому что тогда коллекция не будет отличаться от массива.

Что мы получаем в результате.

По сравнению с массивом объектов, у нас есть быстрый доступ по ключу, без поиска и фильтрации:

```
const barsik = catsCollection.elements['Барсик'];
```

или

```
const barsik = catsCollection.get('Барсик');
```

По сравнению с вложенными объектами, у нас есть сохранение последовательности и методы работы, как с обычным массивом:

```
catsCollection.forEach((cat) => {
  console.log(cat);
});
```

# Версии

0.1.1

Добавили три новых метода:

- rename - переименовать ключ элемента коллекции,
- moveAfter - переместить элемент коллекции после указанного,
- moveBefore - переместить элемент коллекции перед указанным.

Дополнено описание.

# Поддержка

Больше интересных библиотек в репозитории.

Если библиотека понравилась, и вы хотите меня поддержать, не пожалейте поставить звездочку.

А сейчас просто обнимите своих родных и близких, скажите им, как вы их любите.

# Лицензия

Лицензия MIT, 2025
