function bonusScore(input){
    let countOfScore = Number(input[0]);
    let bonus = 0.0;

    if(countOfScore <= 100) {
        bonus = 5;
    } else if(countOfScore > 100 && countOfScore <= 1000) {
        bonus = countOfScore * 0.2;
    } else if(countOfScore > 1000) {
        bonus = countOfScore * 0.1;
    }
    
    if(countOfScore % 2 == 0) {
        bonus += 1;
    } else if(countOfScore % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(countOfScore + bonus);
}
bonusScore(["20"]);