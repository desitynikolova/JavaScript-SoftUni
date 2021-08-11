function coins(input){
    let index = 0;
    let balance = Math.trunc(Number(input[index++]) * 100);
    let coins = 0;

    while(balance > 0){
        if(balance >= 200){
            balance -= 200;
        } else if(balance >= 100){
            balance -= 100;
        } else if(balance >= 50){
            balance -= 50;
        } else if(balance >= 20){
            balance -= 20;
        } else if(balance >= 10){
            balance -= 10;
        } else if(balance >= 5){
            balance -= 5;
        } else if(balance >= 2){
            balance -= 2;
        } else if(balance >= 1){
            balance -= 1;
        }
        coins++;
    }
    console.log(coins);
}
coins(["1.23"]);