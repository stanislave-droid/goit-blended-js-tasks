//Task 5
// const elements = document.querySelectorAll("[data-topic]");
// console.log(elements[elements.length - 1]);

//Task 6
// const list = document.querySelector(".list");
// console.log(list.lastElementChild);

//Task 7
// const headding = document.querySelector("#title");
// console.log(headding.nextSibling);

//Task 8
// const titles = document.querySelectorAll("h3");
// titles.forEach((title) => {
//   console.log(title);
// });

//Task 9
// const titlesWithActive = document.querySelectorAll("h3");
// titlesWithActive.forEach((title) => {
//   title.classList.add("active");
// });

//Task 10
// const navigation = document.querySelector('[data-topic="navigation"]');
// console.log(navigation);

//Task 11
// const yellowNavigation = document.querySelector('[data-topic="navigation"]');
// yellowNavigation.style.backgroundColor = "yellow";

//Task 12
// const changePText = document.querySelector('[data-topic="navigation"]');
// changePText.children[1].textContent = "Я змінив тут текст!";

//Task 13
// const curentTopic = "manipulation";
// const searched = document.querySelector(`[data-topic="${curentTopic}"]`);
// console.log(searched);

//Task 14
// const curentTopic = "manipulation";
// const searched = document.querySelector(`[data-topic="${curentTopic}"]`);
// searched.style.backgroundColor = "cyan";

//Task 15
// const completedTitle = document.querySelector(".completed");
// console.log(completedTitle);

//Task 16
// const completedTitleInLi = document.querySelector(".completed");
// completedTitleInLi.parentElement.remove();

//Task 17
// const mainHedding = document.querySelector("h1");
// const p = document.createElement("p");
// p.textContent = "Об'єктна модель документа (Document Object Model)";
// mainHedding.after(p);

//Task 18
// const completedLi = document.createElement("li");
// const listWithLi = document.querySelector(".list");
// completedLi.innerHTML = `<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`;
// listWithLi.append(completedLi);

//Task 19
// const liElement =
//   "<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>";
// const listWithLiAdjastment = document.querySelector(".list");
// listWithLiAdjastment.insertAdjacentHTML("beforeend", liElement);

//Task 20
// const emptyList = document.querySelector(".list");
// emptyList.innerHTML = "";

//--------------------------Task 2.0 -----------------------------
// const conteiner = document.querySelector(".number-container");
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const boxesWithNumbers = [];
// for (let i = 0; i < 100; i++) {
//   const div = document.createElement("div");
//   div.classList.add("number");
//   const number = randomNumber();
//   div.innerHTML = `${number}`;
//   if (number % 2 === 0) {
//     div.classList.add("even");
//   } else {
//     div.classList.add("odd");
//   }

//   boxesWithNumbers.push(div);
// }

// conteiner.append(...boxesWithNumbers);

//--------------------------Task 3.0 -----------------------------
// const form = document.querySelector(".js-contact-form");
// const span = document.querySelector(".js-username-output");
// const input1 = document.querySelector(".js-username-input");
// form.addEventListener("input", handlInput);

// function handlInput(event) {
//   const form = event.currentTarget;
//   const input = form.elements.userName;

//   const value = input.value;
//   if (value.length >= 6) {
//     input.classList.add("success");
//     input.classList.remove("error");
//   } else {
//     input.classList.add("error");
//     input.classList.remove("success");
//   }
// }

// input1.addEventListener("focus", handleFocus);

// function handleFocus(event) {
//   // const form = event.currentTarget;
//   // const input = form.elements.userName;
//   const value = input1.value;

//   if (value.length === 0) {
//     input1.style.outline = "3px solid red";
//   } else {
//     input1.style.outline = "3px solid green";
//   }
// }

// form.addEventListener("submit", handleSubmit);
// form.addEventListener("input", handleInput);

// function handleSubmit(event) {
//   event.preventDefault();
//   const { userName, accept } = event.currentTarget.elements;
//   if (userName.value.trim() === "" || accept.checked === false) {
//     alert("Invalid data");
//     return;
//   }
//   console.log({ username: userName.value.trim() });
//   span.textContent = "Anonymous";
//   event.currentTarget.reset();
// }

// function handleInput(event) {
//   const input = event.currentTarget.elements.userName;
//   if (input.value.trim() === "") {
//     span.textContent = "Anonymous";
//   } else {
//     span.textContent = input.value.trim();
//   }
// }

//--------------------------Task 4.0 -----------------------------
const box = document.querySelector(".box");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");

decrease.addEventListener("click", handleDecrease);
increase.addEventListener("click", handleIncrease);
box.style.width = "50px";
box.style.height = "50px";

function handleDecrease() {
  console.log(box.style.width);
  console.log(box.style.height);
  const width = box.style.width;
  const height = box.style.height;
  box.style.width = `${Number.parseInt(width) - 20}px`;
  box.style.height = `${Number.parseInt(height) - 20}px`;
}

function handleIncrease() {
  const width = box.style.width;
  const height = box.style.height;
  box.style.width = `${Number.parseInt(width) + 20}px`;
  box.style.height = `${Number.parseInt(height) + 20}px`;
}
