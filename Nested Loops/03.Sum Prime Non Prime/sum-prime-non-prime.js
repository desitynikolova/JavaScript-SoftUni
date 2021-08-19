function sumPrimeNonPrime(input) {
  let numbers = input[0];
  let primeSum = 0;
  let index = 1;
  let nonPrimeSum = 0;

  while (numbers !== "stop") {
    numbers = Number(numbers);
    let isPrime = true;
    if (numbers < 0) {
      console.log("Number is negative.");
      numbers = input[index++];
      continue;
    }

    for (let i = 2; i < numbers; i++) {
      if (numbers % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeSum += numbers;
    } else {
      nonPrimeSum += numbers;
    }
    numbers = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
