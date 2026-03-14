// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

//--------------------------------

// const calculator = {
//   exist() {
//     if (this.a == undefined || this.b == undefined) {
//       return false;
//     } else {
//       return true;
//     }
//   },

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     } else {
//       return "No such propeties";
//     }
//   },

//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     } else {
//       return "No such propeties";
//     }
//   },
// };

// calculator.read(2, 2);
// console.log(calculator.sum());
// console.log(calculator.mult());

//-----------------------------------

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  exist() {
    if (this.num1 == undefined || this.num2 == undefined) {
      return false;
    } else {
      return true;
    }
  },
  sum() {
    if (this.exist()) {
      return this.num1 + this.num2;
    } else {
      return "No such propeties";
    }
  },
  mult() {
    if (this.exist()) {
      return this.num1 * this.num2;
    } else {
      return "No such propeties";
    }
  },
};

calculator.read(4, 6);
console.log(calculator.sum());
console.log(calculator.mult());
