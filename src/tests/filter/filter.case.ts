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
    equal: {
      keys: ['a', 'c', 'e'],
      values: [1, 3, 5],
    },
  },
  {
    collection: { 0: false, 1: null, 2: undefined },
    equal: {
      keys: ['0', '2'],
      values: [false, undefined],
    },
  },
  {
    collection: {
      '5': 'e',
      '2': 'b',
      '3': 'c',
      '1': 'a',
      '6': 'f',
      '4': 'd',
    },
    equal: {
      keys: ['1', '3', '5'],
      values: ['a', 'c', 'e'],
    },
  },
  {
    collection: {},
    equal: {
      keys: [],
      values: [],
    },
  },
];
