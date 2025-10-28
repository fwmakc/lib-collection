import { Collection } from '..';

describe('Проверка коллекции getByIndex', () => {
  const testCases = [
    {
      collection: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      },
      index: 0,
    },
    {
      collection: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      },
      index: -1,
    },
    {
      collection: {
        a: 1,
        f: 6,
        b: 2,
        e: 5,
        c: 3,
        d: 4,
      },
      index: 3,
    },
    {
      collection: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      },
      index: 10,
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
      index: 1,
    },
    {
      collection: {},
      index: 0,
    },
  ];

  testCases.forEach(({ collection, index }) => {
    const col = new Collection(collection);
    const result = col.getByIndex(index);
    const key = Object.keys(collection).at(index);
    // @ts-expect-error next line
    const expectedValue = collection[key];
    it(`Исходная строка: ${collection}`, () => {
      expect(result).toEqual(expectedValue);
    });
  });
});
