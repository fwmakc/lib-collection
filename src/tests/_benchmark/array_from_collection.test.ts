import { Collection } from '../..';

describe('Массив из коллекции:', () => {
  let times = 0;
  let iterates = 100;

  for (let n = 0; n < iterates; n += 1) {
    const timeStart = performance.now();

    const collection = {};
    for (let i = 0; i < 10; i += 1) {
      collection[`${i}n`] = i;
    }

    const col = new Collection(collection);

    const arr = Array.from(col);

    const timeExecute = performance.now() - timeStart;
    times += timeExecute;
  }

  const time = times / iterates;

  it(`Среднее время: ${time}`, () => {
    expect(true).toBeTruthy();
  });
});
