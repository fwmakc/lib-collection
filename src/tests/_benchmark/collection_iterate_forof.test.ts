import { Collection } from '../..';

describe('Итерация по коллекции через for...of:', () => {
  let times = 0;
  let iterates = 100;

  for (let n = 0; n < iterates; n += 1) {
    const collection = {};
    for (let i = 0; i < 100000; i += 1) {
      collection[i] = i;
    }

    const col = new Collection(collection);
    const map: Array<any> = [];

    const timeStart = performance.now();

    for (const value of col) {
      map.push(`${value}++`);
    }

    const timeExecute = performance.now() - timeStart;
    times += timeExecute;
  }

  const time = times / iterates;

  it(`Среднее время: ${time}`, () => {
    expect(true).toBeTruthy();
  });
});
