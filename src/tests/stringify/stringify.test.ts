import { Collection } from '../..';
import { testCases } from './stringify.case';

describe('Проверка коллекции stringify', () => {
  testCases.forEach(({ collection, equal }) => {
    const col = new Collection<any>(collection);

    // console.log('collection:', col);
    // console.log('`${}`:', `${col}`);
    // console.log('toString():', col.toString());
    // console.log('toJSON():', col.toJSON());
    // console.log('JSON:', JSON.stringify(col, null, 2));
    // console.log('String():', String(col));
    // console.log('Number():', Number(col));
    // console.log('+collection:', +col);

    it(`Исходная строка: ${collection}`, () => {
      expect(`${col}`).toBe(equal.string);
      expect(col.toString()).toBe(equal.string);
      expect(col.toJSON()).toBe(equal.json);
      expect(JSON.stringify(col)).toBe(JSON.stringify(equal.json));
      expect(String(col)).toBe(equal.string);
      expect(Number(col)).toBe(equal.number);
      expect(+col).toBe(equal.number);
    });
  });
});
