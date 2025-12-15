import { Collection } from '../..';
import { testCases } from './map.case';

describe('Проверка коллекции map', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    const mapCollection = col.map((value: any) => `${value}++`);
    const mapValues = Object.values(collection).map(
      (value: any) => `${value}++`,
    );

    it(`Исходная строка: ${collection}`, () => {
      expect(mapCollection.values()).toEqual(mapValues);
    });
  });
});
