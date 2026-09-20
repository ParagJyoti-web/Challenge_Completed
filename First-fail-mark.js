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

console.log(firstFail([65, 72, 38, 90]));
console.log(firstFail([50, 60, 70, 50])); 
console.log(firstFail([25, 35, 20, 30])); 