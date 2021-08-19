function numberPyramid(input){
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= n; rows++) {
        let printCurretntLine = "";
        for (let cols = 1; cols <= rows; cols++) {
            printCurretntLine += current + " ";
            if (current >= n) {
                isBigger = true;
                break;
            }
            current++;
        }
        console.log(printCurretntLine);
        if (isBigger) {
        break;
        }
    }
}
numberPyramid([7]);