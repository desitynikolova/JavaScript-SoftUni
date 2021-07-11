function time15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    if(minutes + 15 > 59) {
        hours += 1;
        minutes = 15 - (60 - minutes);
    } else if(minutes + 15 <= 59) {
        minutes += 15;
    }

    if(hours == 24) {
        hours = 0;
    }   

    if(minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }
}
time15Minutes(["12", "49"]);