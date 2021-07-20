function cinema(input) {
  let typeOfProjection = input[0];
  let countOfRows = Number(input[1]);
  let countOfColumns = Number(input[2]);

  let priceForTicket = 0;
  switch (typeOfProjection) {
    case "Premiere": priceForTicket = 12;
      break;
    case "Normal": priceForTicket = 7.50
      break;
    case "Discount": priceForTicket = 5.00
      break;
    default:
      break;
  }

  let totalSum = countOfColumns * countOfRows * priceForTicket;
  console.log(`${totalSum.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
