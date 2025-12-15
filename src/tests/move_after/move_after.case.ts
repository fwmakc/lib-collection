export const data = {
  a: { value: { num: 1 } },
  b: { value: { num: 2 } },
  c: { value: { num: 3 } },
  d: { value: { num: 4 } },
  e: { value: { num: 5 } },
  f: { value: { num: 6 } },
};

export const testCases = [
  {
    from: 'a',
    to: 'f',
    ref: ['b', 'c', 'd', 'e', 'f', 'a'],
  },
  {
    from: 'f',
    to: 'a',
    ref: ['a', 'f', 'b', 'c', 'd', 'e'],
  },
  {
    from: 'd',
    to: 'b',
    ref: ['a', 'b', 'd', 'c', 'e', 'f'],
  },
  {
    from: 'd',
    to: 'e',
    ref: ['a', 'b', 'c', 'e', 'd', 'f'],
  },
  {
    from: 'c',
    to: 'z',
    ref: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
  {
    from: 'z',
    to: 'c',
    ref: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
];
