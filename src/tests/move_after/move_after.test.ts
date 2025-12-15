import { Collection } from '../..';
import { data, testCases } from './move_after.case';

describe('Проверка коллекции moveAfter', () => {
  testCases.forEach(({ from, to, ref }) => {
    const col = new Collection(data);

    col.moveAfter(from, to);

    it(`${col.keys()}. Элемент ${from} перемещается после ${to}`, () => {
      expect(col.keys()).toEqual(ref);
    });
  });
});
