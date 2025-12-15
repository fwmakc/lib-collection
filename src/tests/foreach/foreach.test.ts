import { Collection } from '../..';
import { testCases } from './foreach.case';

describe('Проверка коллекции forEach', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);

    const map: Array<any> = [];

    col.forEach((value: any) => {
      map.push(`${value}++`);
    });

    const mapValues = Object.values(collection).map((item: any) => `${item}++`);

    it(`Исходная строка: ${collection}`, () => {
      expect(map).toEqual(mapValues);
    });
  });
});
