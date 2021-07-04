function vacantionBooksList(input){
    let countOfLists = Number(input[0]);
    let countForHour = Number(input[1]);
    let countOfDaysToReadBook = Number(input[2]);

    let needTimeForBook = countOfLists / countForHour;
    let needTimeForDay = needTimeForBook/countOfDaysToReadBook;

    console.log(needTimeForDay);
}
vacantionBooksList(["212", "20", "2"]);