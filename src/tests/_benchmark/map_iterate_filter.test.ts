describe('Объект:', () => {
  let times = 0;
  let iterates = 100;

  for (let n = 0; n < iterates; n += 1) {
    const collection = new Map();
    for (let i = 0; i < 100000; i += 1) {
      collection.set(`${i}`, i);
    }

    const timeStart = performance.now();

    // const f = Object.fromEntries(
    //   // collection.entries().filter((k, v) => v % 2 !== 0),
    //   Array.from(collection).filter((key, value) => value % 2 !== 0),
    // );

    const f = Array.from(collection).filter((key, value) => value % 2 !== 0);

    const m = new Map(f);

    const timeExecute = performance.now() - timeStart;
    times += timeExecute;
  }

  const time = times / iterates;

  it(`Среднее время: ${time}`, () => {
    expect(true).toBeTruthy();
  });
});
