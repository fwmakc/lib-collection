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
    isEmpty: false,
  },
  {
    collection: {
      0: false,
      1: null,
      2: undefined,
    },
    isEmpty: false,
  },
  {
    collection: {},
    isEmpty: true,
  },
];
