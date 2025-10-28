import { Collection } from '..';

describe('Проверка коллекции includes', () => {
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
      includes: 'a',
      result: true,
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
      includes: 'abc',
      result: false,
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
      includes: '2',
      result: true,
    },
    {
      collection: {},
      includes: 'abc',
      result: false,
    },
  ];

  testCases.forEach(({ collection, includes, result }) => {
    const col = new Collection(collection);
    const isIncludes = col.includes(includes);
    it(`Исходная строка: ${collection}`, () => {
      expect(isIncludes).toEqual(result);
    });
  });
});
