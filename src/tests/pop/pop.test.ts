import { Collection } from '../..';
import { testCases } from './pop.case';

describe('Проверка коллекции pop', () => {
  testCases.forEach(({ collection, result }) => {
    const col = new Collection<any>(collection);

    const value = col.pop();

    it(`Исходная строка: ${collection}`, () => {
      expect(value).toEqual(result);
    });
  });
});
