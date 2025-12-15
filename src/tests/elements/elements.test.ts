import { Collection } from '../..';
import { testCases } from './elements.case';

describe('Проверка коллекции elements', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.elements()).toEqual(collection);
    });
  });
});
