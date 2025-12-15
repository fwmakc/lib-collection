describe('Объект:', () => {
  let times = 0;
  let iterates = 100;

  for (let n = 0; n < iterates; n += 1) {
    const collection = new Map();
    for (let i = 0; i < 100000; i += 1) {
      collection.set(`${i}`, i);
    }

    const timeStart = performance.now();

    const m = collection.entries().map(([k, v]) => `${k}.${v}`);

    const timeExecute = performance.now() - timeStart;
    times += timeExecute;
  }

  const time = times / iterates;

  it(`Среднее время: ${time}`, () => {
    expect(true).toBeTruthy();
  });
});
