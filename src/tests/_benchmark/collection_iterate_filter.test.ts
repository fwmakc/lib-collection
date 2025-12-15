import { Collection } from '../..';

describe('Итерация по коллекции через forEach:', () => {
  let times = 0;
  let iterates = 100;

  for (let n = 0; n < iterates; n += 1) {
    const collection = {};
    for (let i = 0; i < 100000; i += 1) {
      collection[i] = i;
    }

    const col = new Collection(collection);

    const timeStart = performance.now();

    const f = col.filter((value: any) => value % 2 !== 0);

    const timeExecute = performance.now() - timeStart;
    times += timeExecute;
  }

  const time = times / iterates;

  it(`Среднее время: ${time}`, () => {
    expect(true).toBeTruthy();
  });
});
