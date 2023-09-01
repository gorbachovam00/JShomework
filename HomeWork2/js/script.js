//------1--------

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//---a---

// let num = 1;

// if (num > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let num = 0;

// if (num > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let num = -3;

// if (num > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//---b---

// let num1 = 1;
// let num2 = 0;
// let num3 = -3;

// console.log(num1 > 0);
// console.log(num2 > 0);
// console.log(num3 > 0);

//--------2---------

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

//---a---

// let text = "test";

// switch (text) {
//   case "test":
//     console.log("true");
//     break;
//   case "qwerty":
//     console.log("false");
//     break;
//   case "true":
//     console.log("false");
//     break;
// }

// let text = "qwerty";

// switch (text) {
//   case "test":
//     console.log("true");
//     break;
//   case "qwerty":
//     console.log("false");
//     break;
//   case "true":
//     console.log("false");
//     break;
// }

// let text = true;

// switch (text) {
//   case "test":
//     console.log("true");
//     break;
//   case "qwerty":
//     console.log("false");
//     break;
//   case true:
//     console.log("false");
//     break;
// }

//---b---

// let test = "test";
// let qwerty = "qwerty";
// let varianbleTrue = "true";

// console.log(test === test);
// console.log(qwerty === test);
// console.log(varianbleTrue === test);

//-----------3-------------

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

//---a---

// let num = 4;

// if (num > 10) {
//   console.log(num - 5);
// } else {
//   console.log(num + 5);
// }

// let num = 17;

// if (num > 10) {
//   console.log(num - 5);
// } else {
//   console.log(num + 5);
// }

//---b---
// let a = 6;
// a >= 10 ? console.log(a - 5) : console.log(a + 5);

// let a = 23;
// a >= 10 ? console.log(a - 5) : console.log(a + 5);

//--------------4-------------

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

//---a---

// const value = prompt("Введіть число від 1 до 12");

// if (value == "1") {
//   console.log("Січень");
// } else if (value == "2") {
//   console.log("Лютий");
// } else if (value == "3") {
//   console.log("Березень");
// } else if (value == "4") {
//   console.log("Квітень");
// } else if (value == "5") {
//   console.log("Травень");
// } else if (value == "6") {
//   console.log("Червень");
// } else if (value == "7") {
//   console.log("Липень");
// } else if (value == "8") {
//   console.log("Серпень");
// } else if (value == "9") {
//   console.log("Вересень");
// } else if (value == "10") {
//   console.log("Жовтень");
// } else if (value == "11") {
//   console.log("Листопад");
// } else if (value == "12") {
//   console.log("Грудень");
// }

//---b---

// const months = {
//   1: "Jan",
//   2: "Feb",
//   3: "Mar",
//   4: "Apr",
//   5: "May",
//   6: "Jun",
//   7: "Jul",
//   8: "Aug",
//   9: "Sep",
//   10: "Oct",
//   11: "Nov",
//   12: "Dec",
// };

// let num = prompt("Введіть число від 1 до 12");
// num = Number(num);

// if (num >= 1 && num <= 12) {
//   console.log(months[num]);
// } else {
//   console.log("You are trying to type a value which does not exist");
// }

//---------------5--------------

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const num = prompt("Введіть тризначне число");
// if (num > 100) {
//   let a = num / 100;
//   let b = num % 100;
//   let c = num % 10;
//   let sum = a + b + c;
//   alert(`Сумма чисел ${num} = ${sum}`);
//   console.log(sum);
// } else {
//   alert("Це не трьохзначне число. Спробуйте ще раз ");
// }  //не корректно працює!!

//--a--

// let num = parseInt(prompt("Введіть трьохзначне число"));
// if (num >= 100) {
//   let a = Math.floor(num / 100);
//   let b = Math.floor((num % 100) / 10);
//   let c = Math.floor(num % 10);
//   let sum = a + b + c;
//   alert("Сума цифр числа " + num + " дорівнює = " + sum);
// } else {
//   alert("Це не трьохзначне число");
// }

//---b--
// let num = parseInt(prompt("Введіть трьохзначне число"));
// if (num >= 100 && num <= 999) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   alert(`Сума дорівнює = ${sum}`);
// } else {
//   alert("Це не трьохзначне число");
// }
