// Defined Array.eqauls method
if (Array.prototype.equals) {
  console.warn('Overriding existing Array.prototype.equals ');
}

Array.prototype.equals = function(array) {
  if (!array) {
    return false;
  }
  if (this.length != array.length) {
    return false;
  }
  for (let i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i])) {
        return false;
      }
    } else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
};

function getFramesOccurances(video, frame) {
  const targetFrameHash = getHash(frame);
  const sizeOfFrame = frame.length;
  const targetFrameOccurences = getTargetOccurances(
    video,
    sizeOfFrame,
    targetFrameHash
  );
  console.log(targetFrameOccurences);
  return targetFrameOccurences;
}

function getHash(frame) {
  //USING MAP
  /* 
  const map1 = new Map();
  for (let letter of frame) {
    map1.set(letter, letter.charCodeAt());
  }
  return map1; */

  //USING SET
  const set1 = new Set();
  for (let letter of frame) {
    set1.add(letter);
  }
  return set1;
}

function getTargetOccurances(video, sizeOfFrame, targetFrameHash) {
  let listOfOccurrences = [];
  let patternStatus = false;
  if (!(video.length <= 0 && sizeOfFrame <= 0)) {
    for (let i = 0; i < video.length - 1; i += sizeOfFrame) {
      // patternStatus = false;
      let j;
      for (j = i; j < i + sizeOfFrame; j++) {
        if (targetFrameHash.has(video[j])) {
          patternStatus = true;
        } else {
          patternStatus = false;
          break;
        }
      }
      if (patternStatus) {
        listOfOccurrences.push([i, j - 1]);
      }
    }
  } else {
    return [];
  }
  return listOfOccurrences;
}

function arraysIdentical(a1, a2) {
  var i = a1.length;
  if (i != a2.length) return false;
  var i = a1.length;
  while (i--) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

function runTestCase(test) {
  Object.keys(test).forEach((key, index) => {
    let video = test[key];
    console.log('VIDEO: ' + video['video']);
    console.log('TARGET: ' + video['target']);
    // console.log('OUTPUT: ' + video['output']);
    if (
      getFramesOccurances(video['video'], video['target']).equals(
        video['output']
      )
    ) {
      console.log('Test Case ' + (index + 1) + ': Passed\n');
    } else {
      console.log(video['output']);
      console.log('Test Case ' + (index + 1) + ': Failed\n');
    }
  });
}

module.exports = {
  runTestCase
};
