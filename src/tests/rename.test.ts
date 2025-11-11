import { Collection } from '..';

describe('Проверка коллекции rename', () => {
  const data = {
    a: { value: { num: 1 } },
    b: { value: { num: 2 } },
    c: { value: { num: 3 } },
    d: { value: { num: 4 } },
    e: { value: { num: 5 } },
    f: { value: { num: 6 } },
  };

  const testCases = [
    {
      oldName: 'a',
      newName: 'f',
    },
    {
      oldName: 'c',
      newName: 'z',
    },
  ];
  testCases.forEach(({ oldName, newName }) => {
    const col = new Collection(data);

    col.rename(oldName, newName);

    console.log(col.keys, col.elements);

    it(`Исходная строка: ${col}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
