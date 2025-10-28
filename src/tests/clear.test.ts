import { Collection } from '..';

describe('Проверка коллекции clear', () => {
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
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
    },
    {
      collection: {},
    },
  ];

  testCases.forEach(({ collection }) => {
    const col = new Collection(collection);
    col.clear();
    it(`Исходная строка: ${collection}`, () => {
      expect(col.empty()).toBeTruthy();
    });
  });
});
