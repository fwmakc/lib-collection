import { Collection } from '../..';
import { data, testCases } from './rename.case';

describe('Проверка коллекции rename', () => {
  testCases.forEach(({ oldName, newName }) => {
    const col = new Collection(data);

    col.rename(oldName, newName);

    it(`Исходная строка: ${col}`, () => {
      expect(col.get(newName)).toBe(data[oldName]);
    });
  });
});
