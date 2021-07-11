function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let range = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let timeToSwim = range * timeForOneMeter;
    let timePlus = Math.trunc((range / 15)) * 12.5;
    let totalTime = timeToSwim + timePlus;

    if(record <= totalTime){
        console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`);
    } else if(record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);