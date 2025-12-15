import { Collection } from '../..';
import { testCases } from './iterator.case';

describe('Проверка коллекции iterator', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    const map = {};

    for (const [value, key] of col) {
      map[key] = value;
    }

    it(`Исходная строка: ${collection}`, () => {
      expect(map).toEqual(collection);
    });
  });
});
