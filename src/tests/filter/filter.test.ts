import { Collection } from '../..';
import { testCases } from './filter.case';

describe('Проверка коллекции filter', () => {
  testCases.forEach(({ collection, equal }) => {
    const col = new Collection<any>(collection);

    const newCol = col.filter(
      (_value: any, _key: string, index: number) => index % 2 === 0,
    );

    it(`Исходная строка: ${collection}`, () => {
      expect(newCol.keys()).toEqual(equal.keys);
      expect(newCol.values()).toEqual(equal.values);
    });
  });
});
