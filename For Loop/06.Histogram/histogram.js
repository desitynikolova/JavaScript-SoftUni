function histogram(input) {
  let countOfNum = Number(input[0]);

  let counter199 = 0;
  let counter399 = 0;
  let counter599 = 0;
  let counter799 = 0;
  let counter800 = 0;

  for (let i = 1; i <= countOfNum; i++) {
    let num = Number(input[i]);
    if (num >= 1 && num < 200) {
      counter199++;
    } else if (num >= 200 && num < 400) {
      counter399++;
    } else if (num >= 400 && num < 600) {
      counter599++;
    } else if (num >= 600 && num < 800) {
      counter799++;
    } else {
      counter800++;
    }
  }

  console.log(((counter199/countOfNum)*100).toFixed(2) + "%");
  console.log(((counter399/countOfNum)*100).toFixed(2) + "%");
  console.log(((counter599/countOfNum)*100).toFixed(2) + "%");
  console.log(((counter799/countOfNum)*100).toFixed(2) + "%");
  console.log(((counter800/countOfNum)*100).toFixed(2) + "%");
}
histogram(["3", "1", "2", "999"]);
