//Task 1
// const button = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// let password = "";

// button.addEventListener("click", handleClick);

// function handleClick(event) {
//   if (password === "") {
//     password = input.value;
//     input.value = password
//       .split("")
//       .map((item) => "*")
//       .join("");
//     event.currentTarget.textContent = "Розкрити";
//   } else {
//     input.value = password;
//     password = "";
//     event.currentTarget.textContent = "Приховати";
//   }
// }

//Task 2
const list = document.querySelector(".statList");
const sumButton = document.querySelector("#resultButton");

list.addEventListener("click", handleClick);
sumButton.addEventListener("click", handleSum);
let sum = 0;
let stats = {};

function handleClick(event) {
  if (event.target.classList.contains("statList")) {
    return;
  }
  sum += Number.parseInt(event.target.dataset.number);
  if (!stats[event.target.textContent]) {
    stats[event.target.textContent] = 1;
  } else {
    stats[event.target.textContent] += 1;
  }
  //v2 stats[event.target.textContent] = (stats[event.target.textContent] || 0) + 1;
}

function handleSum() {
  console.log(sum);
  console.log(stats);
}
