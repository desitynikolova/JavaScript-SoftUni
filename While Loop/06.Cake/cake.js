function cake(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);

  let index = 2;
  let cakeSize = width * length;

  let countOfCakePiece = 0;

  while (input[index] !== "STOP") {
    let currentPieces = Number(input[index]);
    countOfCakePiece += currentPieces;
    index++;
    if (countOfCakePiece >= cakeSize) {
      break;
    }
  }

  if (countOfCakePiece >= cakeSize) {
    console.log(
      `No more cake left! You need ${countOfCakePiece - cakeSize} pieces more.`
    );
  } else {
    console.log(`${cakeSize - countOfCakePiece} pieces are left.`);
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
