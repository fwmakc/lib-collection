import { Collection } from '../..';
import { testCases } from './length.case';

describe('Проверка коллекции length', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    const length = Object.values(collection).length;

    it(`Исходная строка: ${collection}`, () => {
      expect(col.length()).toBe(length);
    });
  });
});
