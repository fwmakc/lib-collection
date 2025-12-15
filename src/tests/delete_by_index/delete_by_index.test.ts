import { Collection } from '../..';
import { testCases } from './delete_by_index.case';

describe('Проверка коллекции deleteByIndex', () => {
  testCases.forEach(({ collection, index, equal }) => {
    const col = new Collection<any>(collection);
    col.deleteByIndex(index);
    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(equal.keys);
      expect(col.values()).toEqual(equal.values);
    });
  });
});
