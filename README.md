# Frame-In-Video

To run the code run test/test.js file.  
It contains tests on which the code will run.

Example test case:  
Input:

```
const testCases = {
  video1: {
    video: 'abcghjbcakjlbnmvbc',
    target: 'cba',
    output: [[0, 2],[6, 8]]
  },

  video2: {
    video: 'pppkask',
    target: 'pppk',
    output: []
  }
};
```

Output:

```
VIDEO:  abcghjbcakjlbnmvbc
TARGET:  cba
Required OUTPUT:  [ [ 0, 2 ], [ 6, 8 ] ]
Generated Outupt:  [ [ 0, 2 ], [ 6, 8 ] ]
Test Case 1: Passed

VIDEO:  pppkask
TARGET:  pppk
Required OUTPUT:  []
Generated Outupt:  [ [ 0, 3 ] ]
Test Case 5: Failed
```
