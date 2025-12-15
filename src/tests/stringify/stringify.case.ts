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
      string: 'Collection {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}',
      json: '{"a":1,"b":2,"c":3,"d":4,"e":5,"f":6}',
      number: 6,
    },
  },
  {
    collection: { 0: false, 1: null, 2: undefined },
    equal: {
      string: 'Collection {"0":false,"1":null}',
      json: '{"0":false,"1":null}',
      number: 3,
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
      string: 'Collection {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f"}',
      json: '{"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f"}',
      number: 6,
    },
  },
  {
    collection: {},
    equal: {
      string: 'Collection {}',
      json: '{}',
      number: 0,
    },
  },
  {
    collection: undefined,
    equal: {
      string: 'Collection {}',
      json: '{}',
      number: 0,
    },
  },
];
