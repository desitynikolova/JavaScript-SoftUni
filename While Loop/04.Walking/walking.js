function walking(input) {
  let goalSteps = 10000;
  let index = 0;
  let sumOfSteps = 0;

  while (sumOfSteps <= goalSteps) {
    let currentInput = input[index++];
    if (currentInput === "Going home") {
      sumOfSteps += Number(input[index++]);
      break;
    }
    sumOfSteps += Number(currentInput);
  }
  if (sumOfSteps >= goalSteps) {
    console.log(`Goal reached! Good job!`);
    console.log(`${sumOfSteps - goalSteps} steps over the goal!`);
  } else {
    console.log(`${goalSteps - sumOfSteps} more steps to reach goal.`);
  }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
