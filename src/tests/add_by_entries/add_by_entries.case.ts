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
      keys: ['a', 'b', 'c', 'd', 'e', 'f', '2', 'z'],
      values: [100, 2, 3, 4, 5, 6, [true, true, true], 9999],
    },
  },
  {
    collection: { 0: false, 1: null, 2: undefined },
    equal: {
      keys: ['0', '1', '2', 'a', 'z'],
      values: [false, null, [true, true, true], 100, 9999],
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
      keys: ['1', '2', '3', '4', '5', '6', 'a', 'z'],
      values: ['a', [true, true, true], 'c', 'd', 'e', 'f', 100, 9999],
    },
  },
  {
    collection: {},
    equal: {
      keys: ['a', '2', 'z'],
      values: [100, [true, true, true], 9999],
    },
  },
];
