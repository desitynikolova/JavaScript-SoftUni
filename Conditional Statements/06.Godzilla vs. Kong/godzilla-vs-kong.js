function godzilaVsKong(input){
    let budget = Number(input[0]);
    let countOfЕxtras = Number(input[1]);
    let priceForClothes = Number(input[2]);

    let sumAfterPercent = 0;
    let totalSumPriceForClothesAfter = 0;

    let priceForDecor = budget * 0.1;
    let totalSumPriceForClothes = countOfЕxtras * priceForClothes;
    
    if(countOfЕxtras > 150) {
        totalSumPriceForClothesAfter = totalSumPriceForClothes * 0.1;
        sumAfterPercent = totalSumPriceForClothes - totalSumPriceForClothesAfter;
        totalSumPriceForClothes = sumAfterPercent;
    }

    let totalSumForMovie = totalSumPriceForClothes + priceForDecor;
    let leftSum = budget - totalSumForMovie;

    if(totalSumForMovie <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftSum.toFixed(2)} leva left.`); 
    } else if(totalSumForMovie > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSumForMovie - budget).toFixed(2)} leva more.`);
    }
}
godzilaVsKong(["9587.88", "222", "55.68"]);