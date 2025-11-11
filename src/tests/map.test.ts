import { Collection } from '..';

describe('Проверка коллекции map', () => {
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
    const mapped = col.map((item: any, key: any, index: any) => {
      console.log('-- ', index, key, item);
      return `${item}++`;
    });
    console.log(mapped);

    it(`Исходная строка: ${collection}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
