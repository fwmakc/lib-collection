import { Collection } from '../..';
import { testCases } from './empty.case';

describe('Проверка коллекции empty', () => {
  testCases.forEach(({ collection, isEmpty }) => {
    const col = new Collection<any>(collection);
    const isEmptyCollection = col.empty();
    it(`Исходная строка: ${collection}`, () => {
      if (isEmpty) {
        expect(isEmptyCollection).toBeTruthy();
      } else {
        expect(isEmptyCollection).toBeFalsy();
      }
    });
  });
});
