function salary(input){
    let countOfOpenTabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 0; i<=salary; i++){
        let nameOfWebsite = input[i];

        if(nameOfWebsite === "Facebook"){
            salary -= 150;
        } 
        if(nameOfWebsite === "Reddit"){
            salary -= 50;
        }
        if(nameOfWebsite === "Instagram"){
            salary -= 100;
        }
    }

    if(salary <= 0){
        console.log("You have lost your salary.");
    } else{
        console.log(salary);
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
;