function metricConverter(input){
    let num = Number(input[0]);
    let measure = input[1];
    let finalMeasure = input[2];

    let finalNum = 0;

    if(measure == "mm" && finalMeasure == "cm") {
        finalNum = num / 10;
    } else if (measure == "mm" && finalMeasure == "m") {
        finalNum = num / 1000;
    } else if (measure == "cm" && finalMeasure == "mm") {
        finalNum = num * 10;
    } else if (measure == "cm" && finalMeasure == "m") {
        finalNum = num / 100;
    } else if (measure == "m" && finalMeasure == "mm") {
        finalNum = num * 1000;
    } else if (measure == "m" && finalMeasure == "cm") {
        finalNum = num * 100;
    }

    console.log(finalNum.toFixed(3));
}
metricConverter(["12", "mm", "m"]);