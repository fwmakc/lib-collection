import { Collection } from '../..';
import { testCases } from './includes.case';

describe('Проверка коллекции includes', () => {
  testCases.forEach(({ collection, includes, result }) => {
    const col = new Collection<any>(collection);
    const isIncludes = col.includes(includes);
    it(`Исходная строка: ${collection}`, () => {
      expect(isIncludes).toEqual(result);
    });
  });
});
