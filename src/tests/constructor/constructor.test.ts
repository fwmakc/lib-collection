import { Collection } from '../..';
import { testCases } from './constructor.case';

describe('Проверка создания коллекции', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);
    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(Object.keys(collection));
      expect(col.values()).toEqual(Object.values(collection));
    });
  });
});
