import { Collection } from '..';

describe('Проверка коллекции empty', () => {
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
      isEmpty: false,
    },
    {
      collection: {
        0: false,
        1: null,
        2: undefined,
      },
      isEmpty: false,
    },
    {
      collection: {},
      isEmpty: true,
    },
  ];

  testCases.forEach(({ collection, isEmpty }) => {
    const col = new Collection<any>(collection);
    const isEmptyCollection = col.empty();
    it(`Исходная строка: ${collection}`, () => {
      if (isEmpty) {
        expect(isEmptyCollection).toBeTruthy();
      } else {
        expect(isEmptyCollection).toBeFalsy();
      }
    });
  });
});
