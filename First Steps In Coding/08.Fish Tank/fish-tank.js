function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeAquarium = length * width * height;
    let totalLiters = volumeAquarium * 0.001;
    let percentForLiter = percent * 0.01;
    let litersNeedsForAquarium = totalLiters * (1-percentForLiter);

    console.log(litersNeedsForAquarium);
}
fishTank(["85", "75", "47", "17"]);