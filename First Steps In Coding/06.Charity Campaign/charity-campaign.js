function charityCampaign(input){
    let countOfDays = Number(input[0]);
    let countOfConfectioners = Number(input[1]);
    let countOfCake = Number(input[2]);
    let countOfWaffles = Number(input[3]);
    let countOfPancakes = Number(input[4]);

    let sumCakeForDay = countOfCake * 45;
    let sumWafflesForDay = countOfWaffles * 5.80;
    let sumPancakesForDay = countOfPancakes * 3.20;

    let totalSumForDay = (sumCakeForDay + sumWafflesForDay + sumPancakesForDay) * countOfConfectioners;
    let sumForCampaign = totalSumForDay * countOfDays;
    let totalSum = sumForCampaign - (sumForCampaign * (1/8));

    console.log(totalSum);
}
charityCampaign(["131", "5", "9", "33", "46"]);