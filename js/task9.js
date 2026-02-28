function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Are you 18 years old or older?");
  }
}

const age = Number.parseInt(prompt("Write your age: "));
alert(isAdult(age) ? "Alright, welcome in" : "You are not old enough to enter");
