function minNum(input) {
  let countOfNum = Number(input[0]);

  let minNum = Number(input[1]);

  for (let i = 1; i <= countOfNum; i++) {
    let number = Number(input[i]);

    if (number < minNum) {
      minNum = number;
    }
  }

  console.log(minNum);
}
minNum(["4", "45", "-20", "7", "99"]);
