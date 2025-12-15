import { Collection } from '../..';
import { testCases } from './get.case';

describe('Проверка коллекции get', () => {
  testCases.forEach(({ collection, key }) => {
    const col = new Collection<any>(collection);
    const result = col.get(key);
    const expectedValue = collection[key];
    it(`Исходная строка: ${collection}`, () => {
      expect(result).toEqual(expectedValue);
    });
  });
});
