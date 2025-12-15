import { Collection } from '../..';
import { testCases } from './delete.case';

describe('Проверка коллекции delete', () => {
  testCases.forEach(({ collection, key, equal }) => {
    const col = new Collection<any>(collection);
    col.delete(key);
    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(equal.keys);
      expect(col.values()).toEqual(equal.values);
    });
  });
});
