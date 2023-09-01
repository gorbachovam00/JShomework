///---1---

// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }

// console.log(checkAge(17));
// console.log(checkAge(20));

/// ---2---

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

//--(a)--

// const minNumber = function (a, b) {
//   console.log("a:", a);
// };

// minNumber(Math.min(7, 10));

//--(b)--

// function min(a, b) {
//   return a, b;
// }
// let result = min(10, 50);
// console.log(Math.min(10, 50));

//--(c)--

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(23, 25));
// console.log(min(48, 60));

//----(d)----

// function min(a, b) {
//   console.log(Math.min(a, b));
// }
// min(7, 44);
// min(44, 8);

///---3---

// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   "Ви згодні?",
//   (showYes = () => alert("Ви погодились.")),
//   (showNo = () => alert("Ви скасували виконання."))
// );
