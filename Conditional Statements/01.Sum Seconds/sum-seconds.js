function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalSumOfTimes = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalSumOfTimes / 60);
    let seconds = totalSumOfTimes % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);