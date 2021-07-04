function fruitMarket(input){
    let priceForStrawberries = Number(input[0]);
    let countOfBananas = Number(input[1]);
    let countOfOranges = Number(input[2]);
    let countOfRaspberries = Number(input[3]);
    let countOfStrawberries = Number(input[4]);

    let priceForRaspberries = priceForStrawberries / 2;
    let priceForOranges = priceForRaspberries - (0.4 * priceForRaspberries);
    let priceForBananas = priceForRaspberries - (0.8 * priceForRaspberries);
    let sumForRaspberries = countOfRaspberries * priceForRaspberries;
    let sumForOranges = countOfOranges * priceForOranges;
    let sumForBananas = countOfBananas * priceForBananas;
    let sumForStrawberries = countOfStrawberries * priceForStrawberries;

    let totalSum = sumForRaspberries + sumForOranges + sumForBananas + sumForStrawberries;

    console.log(totalSum.toFixed(2));
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);