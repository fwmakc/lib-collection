import { Collection } from '..';

describe('Проверка коллекции shift', () => {
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
      result: 1,
    },
    {
      collection: {
        b: 2,
        f: 6,
        a: 1,
        e: 5,
        c: 3,
        d: 4,
      },
      result: 2,
    },
    {
      collection: {
        '5a': 'e',
        '2a': 'b',
        '3a': 'c',
        '1a': 'a',
        '6a': 'f',
        '4a': 'd',
      },
      result: 'e',
    },
    {
      collection: {
        '5': 'e',
        '2': 'b',
        '3': 'c',
        '1': 'a',
        '6': 'f',
        '4': 'd',
      },
      result: 'a',
    },
    {
      collection: {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
      },
      result: 'a',
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
      result: false,
    },
    {
      collection: {},
      result: undefined,
    },
  ];

  testCases.forEach(({ collection, result }) => {
    const col = new Collection<any>(collection);
    const value = col.shift();
    console.log(col);
    it(`Исходная строка: ${collection}`, () => {
      expect(value).toEqual(result);
    });
  });
});
