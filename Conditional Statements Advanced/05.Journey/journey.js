function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let campOrHotel;
    if(budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            budget *= 0.3;
            campOrHotel = "Camp";
        } else if(season === "winter"){
            budget *= 0.7;
            campOrHotel = "Hotel";
        }
    } else if(budget>100 && budget <=1000){
        destination = "Balkans";
        if(season === "summer"){
            budget *= 0.4;
            campOrHotel = "Camp";
        } else if(season === "winter"){
            budget *= 0.8;
            campOrHotel = "Hotel";
        }
    }else if(budget >1000){
        destination = "Europe";
        budget *= 0.9;
        campOrHotel = "Hotel";
        
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${campOrHotel} - ${budget.toFixed(2)}`);
}
journey(["75", "winter"]);