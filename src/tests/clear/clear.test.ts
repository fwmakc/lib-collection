import { Collection } from '../..';
import { testCases } from './clear.case';

describe('Проверка коллекции clear', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);
    col.clear();

    it(`Исходная строка: ${collection}`, () => {
      expect(col.empty()).toBeTruthy();
    });
  });
});
