import { Collection } from '../..';
import { testCases } from './shift.case';

describe('Проверка коллекции shift', () => {
  testCases.forEach(({ collection, result }) => {
    const col = new Collection<any>(collection);

    const value = col.shift();

    it(`Исходная строка: ${collection}`, () => {
      expect(value).toEqual(result);
    });
  });
});
