function countPassingMarks(marks, passMark = 40) {
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < passMark) {
            continue; 
        }
        count++;
    }
    return count;
}


console.log(countPassingMarks([35, 40, 72, 28, 55]));