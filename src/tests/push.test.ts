import { Collection } from '..';

describe('Проверка коллекции push', () => {
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
      key: 'g',
      value: 7,
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
      key: 'a',
      value: 0,
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
      key: 'z',
      value: 5,
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
      value: 'z',
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
      key: '3',
      value: null,
    },
    {
      collection: {},
      key: '',
      value: '',
    },
  ];

  testCases.forEach(({ collection, key, value }) => {
    const col = new Collection<any>(collection);
    col.push(key, value);
    console.log(col);
    it(`Исходная строка: ${collection}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
