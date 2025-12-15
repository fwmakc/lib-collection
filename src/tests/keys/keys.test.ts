import { Collection } from '../..';
import { testCases } from './keys.case';

describe('Проверка коллекции keys', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(Object.keys(collection));
    });
  });
});
