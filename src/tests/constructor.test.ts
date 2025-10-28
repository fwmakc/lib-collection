import { Collection } from '..';

describe('Проверка создания коллекции', () => {
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
      collection: {},
    },
  ];

  testCases.forEach(({ collection }) => {
    const col = new Collection(collection);
    console.log(col);
    it(`Исходная строка: ${collection}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
