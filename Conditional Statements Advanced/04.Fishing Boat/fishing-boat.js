function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let countOfFishermen = Number(input[2]);

  let sum = 0;
  let boatRental = 0;
  switch (season) {
    case "Spring":
      boatRental = 3000;
      break;
    case "Summer":
    case "Autumn":
      boatRental = 4200;
      break;
    case "Winter":
      boatRental = 2600;
      break;
  }

  if (countOfFishermen <= 6) {
    sum = boatRental - boatRental * 0.1;
  } else if (countOfFishermen >= 7 && countOfFishermen <= 11) {
    sum = boatRental - boatRental * 0.15;
  } else if (countOfFishermen >= 12) {
    sum = boatRental - boatRental * 0.25;
  }

  if (countOfFishermen % 2 == 0 && season != "Autumn") {
    sum = sum - sum * 0.05;
  } else {
    sum = sum;
  }

  if (budget >= sum) {
    console.log(`Yes! You have ${(budget-sum).toFixed(2)} leva left.`);
  } else if (budget < sum) {
    console.log(`Not enough money! You need ${(sum-budget).toFixed(2)} leva.`);
  }
}
fishingBoat(["2000", "Winter", "13"]);
