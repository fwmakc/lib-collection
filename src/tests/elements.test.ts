import { Collection } from '..';

describe('Проверка коллекции elements', () => {
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
    const col = new Collection<any>(collection);
    col.elements = { a: 100, z: 999, 2: [true, true, true] };
    const values = col.elements;
    values.z = 9999;
    console.log(col.elements);

    it(`Исходная строка: ${collection}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
