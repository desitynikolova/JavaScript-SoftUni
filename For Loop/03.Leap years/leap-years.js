function leapYears(input){
    let firstYear = Number(input[0]);
    let secondYear = Number(input[1]);

    for(let i = firstYear; i <= secondYear; i++){
        if(i%2==0){
            console.log(i);
            i += 2;
        }
    }
}
leapYears(["2000", "2011"]);