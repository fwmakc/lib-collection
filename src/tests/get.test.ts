import { Collection } from '..';

describe('Проверка коллекции get', () => {
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
      key: 'abc',
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
      key: 'abc',
    },
  ];

  testCases.forEach(({ collection, key }) => {
    const col = new Collection<any>(collection);
    const result = col.get(key);
    // @ts-expect-error next line
    const expectedValue = collection[key];
    console.log({ result, expectedValue });
    it(`Исходная строка: ${collection}`, () => {
      expect(result).toEqual(expectedValue);
    });
  });
});
