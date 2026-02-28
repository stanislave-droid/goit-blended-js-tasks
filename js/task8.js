function min(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    console.log("Not a number!");
    return;
  }

  if (a < b) {
    console.log(`Min: ${a}`);
  } else {
    console.log(`Min: ${b}`);
  }
}

const a = prompt("Write first number: ");
const b = prompt("Write second number: ");

min(a, b);
