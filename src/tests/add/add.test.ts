import { Collection } from '../..';
import { testCases } from './add.case';

describe('Проверка коллекции add', () => {
  testCases.forEach(({ collection, equal }) => {
    const col = new Collection<any>(collection);
    col.add({ a: 100, 2: [true, true, true], z: 999 });
    const values = col.elements();
    values.z = 9999;
    col.add(values);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(equal.keys);
      expect(col.values()).toEqual(equal.values);
    });
  });
});
