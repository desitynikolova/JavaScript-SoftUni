function depositCalc(input){
    let depositSum = Number(input[0]);
    let timeInMonths = Number(input[1]);
    let yearPercent = Number(input[2]);

    let accruedInterest = depositSum * (yearPercent/100);
    let interestForMonth = accruedInterest / 12;
    let totalSum = depositSum + (timeInMonths * interestForMonth);

    console.log(totalSum);
}
depositCalc(["200", "3", "5.7"]);