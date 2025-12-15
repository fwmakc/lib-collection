export const testCases = [
  {
    collection: {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    },
    key: 'a',
  },
  {
    collection: {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    },
    key: 'abc',
  },
  {
    collection: {
      0: false,
      1: null,
      2: undefined,
    },
    key: '1',
  },
  {
    collection: {},
    key: 'abc',
  },
];
