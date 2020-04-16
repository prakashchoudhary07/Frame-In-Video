// Test Runner to find frames in video with all possible values.
const { runTestCase } = require('../src/FrameInVideo');

const testCases = {
  video1: {
    video: 'abcghjbcakjlbnmvbc',
    target: 'cba',
    output: [
      [0, 2],
      [6, 8]
    ]
  },
  video2: {
    video: '',
    target: '',
    output: []
  },
  video3: {
    video: '',
    target: 'fdsf',
    output: []
  },
  video4: {
    video: 'prsk',
    target: 'skpr',
    output: [[0, 3]]
  },
  video5: {
    video: 'pppkask',
    target: 'pppk',
    output: []
  }
};

runTestCase(testCases);
