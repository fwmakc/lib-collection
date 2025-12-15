export const testCases = [
  {
    collection: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    key: 'a',
    equal: {
      keys: ['b', 'c', 'd', 'e', 'f'],
      values: [2, 3, 4, 5, 6],
    },
  },
  {
    collection: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    key: 'f',
    equal: {
      keys: ['a', 'b', 'c', 'd', 'e'],
      values: [1, 2, 3, 4, 5],
    },
  },
  {
    collection: { a: 1, f: 6, b: 2, e: 5, c: 3, d: 4 },
    key: 'e',
    equal: {
      keys: ['a', 'f', 'b', 'c', 'd'],
      values: [1, 6, 2, 3, 4],
    },
  },
  {
    collection: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
    key: 'z',
    equal: {
      keys: ['a', 'b', 'c', 'd', 'e', 'f'],
      values: [1, 2, 3, 4, 5, 6],
    },
  },
  {
    collection: { 0: false, 1: null, 2: undefined },
    key: '1',
    equal: {
      keys: ['0', '2'],
      values: [false, undefined],
    },
  },
  {
    collection: {},
    key: '0',
    equal: {
      keys: [],
      values: [],
    },
  },
];
