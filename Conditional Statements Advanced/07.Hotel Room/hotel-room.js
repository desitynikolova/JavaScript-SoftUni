function hotelRoom(input) {
  let month = input[0];
  let countOfNights = Number(input[1]);

  let priceForStudio = 0;
  let priceForApartment = 0;
  let totalSumForStudio = 0;
  let totalSumForApartment = 0;

  switch (month) {
    case "May":
    case "October":
      priceForStudio = 50;
      priceForApartment = 65;
      if (countOfNights > 7 && countOfNights < 14) {
        priceForStudio = priceForStudio - (priceForStudio * 0.05);
        priceForApartment = priceForApartment;
      } else if (countOfNights > 14) {
        priceForStudio = priceForStudio - (priceForStudio * 0.3);
        priceForApartment = priceForApartment - (priceForApartment * 0.1);
      } else {
        priceForStudio = priceForStudio;
        priceForApartment = priceForApartment;
      }
      totalSumForStudio = priceForStudio * countOfNights;
      totalSumForApartment = priceForApartment * countOfNights;
      break;
    case "June":
    case "September":
      priceForStudio = 75.2;
      priceForApartment = 68.7;
      if (countOfNights > 14) {
        priceForStudio = priceForStudio - (priceForStudio * 0.2);
        priceForApartment = priceForApartment - (priceForApartment * 0.1);
      } else {
        priceForStudio = priceForStudio;
        priceForApartment = priceForApartment;
      }
      totalSumForStudio = priceForStudio * countOfNights;
      totalSumForApartment = priceForApartment * countOfNights;
      break;
    case "July":
    case "August":
      priceForStudio = 76;
      priceForApartment = 77;
      if (countOfNights > 14) {
        priceForApartment = priceForApartment - (priceForApartment * 0.1);
        priceForStudio = priceForStudio;
      } else {
        priceForApartment = priceForApartment;
        priceForStudio = priceForStudio;
      }
      totalSumForStudio = priceForStudio * countOfNights;
      totalSumForApartment = priceForApartment * countOfNights;
      break;
    default:
      break;
  }

  console.log(`Apartment: ${totalSumForApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalSumForStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);