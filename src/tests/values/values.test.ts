import { Collection } from '../..';
import { testCases } from './values.case';

describe('Проверка коллекции values', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.values()).toEqual(Object.values(collection));
    });
  });
});
