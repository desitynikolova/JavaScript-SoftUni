function vacation(input) {
  let moneyNeedForVacation = Number(input[0]);
  let availableMoney = Number(input[1]);
  let index = 2;
  let countOfDays = 0;
  let spendCounter = 0;

  while (availableMoney < moneyNeedForVacation) {
    let spendOrSave = input[index++];
    let moneySpendOrSave = Number(input[index++]);
    countOfDays++;
    if (spendOrSave === "spend") {
      if (availableMoney < moneySpendOrSave) {
        availableMoney = 0;
      } else {
        availableMoney -= moneySpendOrSave;
      }
      spendCounter++;
      if (spendCounter === 5) {
        break;
      }
    } else if (spendOrSave === "save") {
      spendCounter = 0;
      availableMoney += moneySpendOrSave;
    }
  }
  if (spendCounter === 5) {
    console.log("You can't save the money.");
    console.log(countOfDays);
  } else {
    console.log(`You saved the money for ${countOfDays} days.`);
  }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
;
