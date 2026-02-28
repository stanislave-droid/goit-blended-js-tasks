function fizzbuzz(num) {
  if (num <= 1) {
    console.log("Wrong number");
    return;
  }
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    }
  }
}

fizzbuzz(Number.parseInt(prompt("Write some number: ")));
