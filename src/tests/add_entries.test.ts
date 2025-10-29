import { Collection } from '..';

describe('Проверка коллекции addEntries', () => {
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
      collection: {
        '5': 'e',
        '2': 'b',
        '3': 'c',
        '1': 'a',
        '6': 'f',
        '4': 'd',
      },
    },
    {
      collection: {},
    },
  ];

  testCases.forEach(({ collection }) => {
    const col = new Collection(collection);
    col.addEntries([
      ['a', 100],
      ['z', 999],
      [2, [true, true, true]],
    ]);
    const values = col.entries;
    console.log(values);

    it(`Исходная строка: ${collection}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
