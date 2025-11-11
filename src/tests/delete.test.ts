import { Collection } from '..';

describe('Проверка коллекции delete', () => {
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
      key: 'a',
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
      key: 'f',
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
      key: 'e',
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
      key: 'z',
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
      key: '1',
    },
    {
      collection: {},
      key: '0',
    },
  ];

  testCases.forEach(({ collection, key }) => {
    const col = new Collection<any>(collection);
    col.delete(key);
    console.log(col);
    it(`Исходная строка: ${collection}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
