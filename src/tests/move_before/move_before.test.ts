import { Collection } from '../..';
import { data, testCases } from './move_before.case';

describe('Проверка коллекции moveBefore', () => {
  testCases.forEach(({ from, to, ref }) => {
    const col = new Collection(data);

    col.moveBefore(from, to);

    it(`${col.keys()}. Элемент ${from} перемещается перед ${to}`, () => {
      expect(col.keys()).toEqual(ref);
    });
  });
});
