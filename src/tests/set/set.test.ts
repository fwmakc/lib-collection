import { Collection } from '../..';
import { testCases } from './set.case';

describe('Проверка коллекции set', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);
    col.set({ a: 100, 2: [true, true, true], z: 999 });
    const values = col.elements();
    values.z = 9999;
    col.set(values);

    const keys = ['2', 'a', 'z'];
    const vals = [[true, true, true], 100, 9999];

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(keys);
      expect(col.values()).toEqual(vals);
    });
  });
});
