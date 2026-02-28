function getNumbers(min, max) {
  let evenNumbers = 0;
  if (min > max || min == max) {
    console.log("Wrong numbers min and max");
    return;
  }
  while (max >= min) {
    console.log(max);
    if (max % 2 === 0) {
      evenNumbers++;
    }
    max--;
  }
  console.log(`${evenNumbers} - even numbers`);
}

const min = Number.parseInt(prompt("Write min number: "));
const max = Number.parseInt(prompt("Write max number: "));

getNumbers(min, max);
