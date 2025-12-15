import { Collection } from '../..';
import { testCases } from '../push/push.case';

describe('Проверка коллекции push', () => {
  testCases.forEach(({ collection, key, value }) => {
    const col = new Collection<any>(collection);

    col.push(key, value);

    delete collection[key];
    const keys = key
      ? [...Object.keys(collection), key]
      : Object.keys(collection);
    const values = key
      ? [...Object.values(collection), value]
      : Object.values(collection);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(keys);
      expect(col.values()).toEqual(values);
    });
  });
});
