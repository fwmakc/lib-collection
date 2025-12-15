import { Collection } from '../..';
import { testCases } from './add_by_entries.case';

describe('Проверка коллекции addByEntries', () => {
  testCases.forEach(({ collection, equal }) => {
    const col = new Collection<any>(collection);
    col.addByEntries([
      ['a', 100],
      ['2', [true, true, true]],
      ['z', 999],
    ]);
    const values = col.entries();
    values.push(['z', 9999]);
    col.addByEntries(values);

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(equal.keys);
      expect(col.values()).toEqual(equal.values);
    });
  });
});
