import { Collection } from '../..';

describe('Коллекция из объекта:', () => {
  let times = 0;
  let iterates = 100;

  for (let n = 0; n < iterates; n += 1) {
    const timeStart = performance.now();

    const collection = {};
    for (let i = 0; i < 100000; i += 1) {
      collection[i] = i;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const col = new Collection(collection);

    const timeExecute = performance.now() - timeStart;
    times += timeExecute;
  }

  const time = times / iterates;

  it(`Среднее время: ${time}`, () => {
    expect(true).toBeTruthy();
  });
});
