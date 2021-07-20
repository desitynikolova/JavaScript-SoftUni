function volleyball(input){
    let leapOrNormalYear = input[0];
    let holidays = Number(input[1]);
    let weekendsHome = Number(input[2]);

    let volleyDays = 0;

    if(leapOrNormalYear === "normal"){
        volleyDays =holidays * 2.0 / 3 + weekendsHome + (48 - weekendsHome) * 3.0 / 4;
    } else{
        volleyDays = (holidays * 2.0 / 3 + weekendsHome + (48 - weekendsHome) * 3.0 / 4) * 1.15;
    }

    console.log(Math.floor(volleyDays));
}
volleyball(["leap", "5", "2"]);