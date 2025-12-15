import { Collection } from '../..';
import { testCases } from './get_by_index.case';

describe('Проверка коллекции getByIndex', () => {
  testCases.forEach(({ collection, index }) => {
    const col = new Collection<any>(collection);
    const result = col.getByIndex(index);
    const key = Object.keys(collection).at(index)!;
    const expectedValue = collection[key];
    it(`Исходная строка: ${collection}`, () => {
      expect(result).toEqual(expectedValue);
    });
  });
});
