import { Collection } from '../..';
import { testCases } from './foreach_reversed.case';

describe('Проверка коллекции forEachReversed', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    const map: Array<any> = [];

    col.forEachReversed((value: any) => {
      map.push(`${value}++`);
    });

    const mapValues = Object.values(collection)
      .reverse()
      .map((item: any) => `${item}++`);

    it(`Исходная строка: ${collection}`, () => {
      expect(map).toEqual(mapValues);
    });
  });
});
