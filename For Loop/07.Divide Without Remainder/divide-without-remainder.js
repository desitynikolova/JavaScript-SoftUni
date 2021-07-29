function divideWithoutRemainder(input) {
  let countOfNum = Number(input[0]);

  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;

  for (let i = 1; i <= countOfNum; i++) {
    let number = Number(input[i]);

    if (number % 2 === 0) {
      counter2++;
    }
    if (number % 3 === 0) {
      counter3++;
    }
    if (number % 4 === 0) {
      counter4++;
    }
  }

  console.log(((counter2 / countOfNum) * 100).toFixed(2) + "%");
  console.log(((counter3 / countOfNum) * 100).toFixed(2) + "%");
  console.log(((counter4 / countOfNum) * 100).toFixed(2) + "%");
}
divideWithoutRemainder(["3", "3", "6", "9"]);
