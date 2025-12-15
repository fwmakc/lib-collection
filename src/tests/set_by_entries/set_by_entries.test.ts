import { Collection } from '../..';
import { testCases } from './set_by_entries.case';

describe('Проверка коллекции set', () => {
  testCases.forEach(({ collection }) => {
    const col = new Collection<any>(collection);
    col.setByEntries([
      ['a', 100],
      ['2', [true, true, true]],
      ['z', 999],
    ]);
    const values = col.entries();
    values.push(['z', 9999]);
    col.setByEntries(values);

    const keys = ['a', '2', 'z'];
    const vals = [100, [true, true, true], 9999];

    it(`Исходная строка: ${collection}`, () => {
      expect(col.keys()).toEqual(keys);
      expect(col.values()).toEqual(vals);
    });
  });
});
