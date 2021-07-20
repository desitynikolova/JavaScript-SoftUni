function newHouse(input){
    let flowers = input[0];
    let countOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let priceForFlower = 0;
    let totalSum = 0;

    switch(flowers){
        case "Roses": priceForFlower = 5; 
        if(countOfFlowers > 80){
            totalSum = (countOfFlowers * priceForFlower) - (countOfFlowers*priceForFlower*0.1);
        } else {
            totalSum = countOfFlowers * priceForFlower;
        }
        break;
        case "Dahlias": priceForFlower = 3.80;
        if(countOfFlowers > 90){
            totalSum = (countOfFlowers * priceForFlower) - (countOfFlowers*priceForFlower*0.15);
        } else {
            totalSum = countOfFlowers * priceForFlower;
        }
        break;
        case "Tulips": priceForFlower = 2.80;
        if(countOfFlowers > 80){
            totalSum = (countOfFlowers * priceForFlower) - (countOfFlowers*priceForFlower*0.15);
        } else {
            totalSum = countOfFlowers * priceForFlower;
        }
        break;
        case "Narcissus": priceForFlower = 3;
        if(countOfFlowers < 120){
            totalSum = (countOfFlowers * priceForFlower) + (countOfFlowers*priceForFlower*0.15);
        } else {
            totalSum = countOfFlowers * priceForFlower;
        }
        break;
        case "Gladiolus": priceForFlower = 2.50; 
        if(countOfFlowers < 80){
            totalSum = (countOfFlowers * priceForFlower) + (countOfFlowers*priceForFlower*0.2);
        } else {
            totalSum = countOfFlowers * priceForFlower;
        }
        break;
        default:break;
    }

    if(budget >= totalSum){
        console.log(`Hey, you have a great garden with ${countOfFlowers} ${flowers} and ${(budget-totalSum).toFixed(2)} leva left.`);
    } else if(budget < totalSum){
        console.log(`Not enough money, you need ${(totalSum-budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"]);