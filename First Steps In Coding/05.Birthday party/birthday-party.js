function birthdayParty(input){
    let hallRental = Number(input[0]);
    
    let priceForCake = hallRental * (20/100);
    let priceForDrinks = priceForCake - (priceForCake * (45/100));
    let priceForAnimator = (1/3) * hallRental;

    let totalSumForBirthday = hallRental + priceForCake + priceForDrinks + priceForAnimator;

    console.log(totalSumForBirthday);
}
birthdayParty(["2250"]);