import { Collection } from '../..';
import { testCases } from './entries.case';

describe('Проверка коллекции entries', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.entries()).toEqual(Object.entries(collection));
    });
  });
});
