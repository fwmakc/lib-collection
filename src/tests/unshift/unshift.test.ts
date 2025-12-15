import { Collection } from '../..';
import { testCases } from './unshift.case';

describe('Проверка коллекции unshift', () => {
  testCases.forEach(({ collection, key, value }) => {
    const col = new Collection<any>(collection);

    col.unshift(key, value);

    delete collection[key];
    const keys = key
      ? [key, ...Object.keys(collection)]
      : Object.keys(collection);
    const values = key
      ? [value, ...Object.values(collection)]
      : Object.values(collection);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(keys);
      expect(col.values()).toEqual(values);
    });
  });
});
