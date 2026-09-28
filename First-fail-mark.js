function firstFail(marks, passMark = 40) {
  let failIndex = -1;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < passMark) {
      failIndex = i;
      break;
    }
  }

  return failIndex;
}

console.log(firstFail([65, 72, 33, 80])); 
console.log(firstFail([50, 60, 70], 40)); 
console.log(firstFail([30, 90, 20], 40)); 