function examPreparation(input) {
  let maxLowGrade = Number(input[0]);
  let index = 1;
  let command = input[index++];
  let countOfExams = 0;
  let countLowGrade = 0;
  let sumOfGrades = 0;
  let lastTask;

  while (command !== "Enough") {
    let currentGrade = Number(input[index++]);
    if (currentGrade <= 4) {
      countLowGrade++;
      if (countLowGrade === maxLowGrade) {
        break;
      }
    }
    sumOfGrades += currentGrade;
    lastTask = command;
    countOfExams++;
    command = input[index++];
  }

  if (countLowGrade === maxLowGrade) {
    console.log(`You need a break, ${maxLowGrade} poor grades.`);
  } else {
    console.log(`Average score: ${(sumOfGrades / countOfExams).toFixed(2)}`);
    console.log(`Number of problems: ${countOfExams}`);
    console.log(`Last problem: ${lastTask}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
