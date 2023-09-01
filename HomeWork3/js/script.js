//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let arr = [];
// for (let i = 0; i < fruts.length; i++) {
//   let word = fruts[i].name;
//   arr.push(word);
// }
// console.log(arr);

//-------////

// let names = "Apple,Tomat,Cherry,Orange";
// let arr = names.split(", ");
// console.log(arr);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

//(((((((a)))))))

// for (let a = 2; a < 10; a += 2) {
//   console.log(a);
// }

//(((b)))

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//  -- 3 --
//Замініть цикл "for" на "while"

// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

//((a))

// let num;

// do {
//   num = prompt("Введіть число більше за 100:", "");
// } while (num !== null && (isNaN(num) || parseInt(num) >= 100));

// do {
//   num = prompt("Введіть число ще раз:", "");
// } while (num !== null && (isNaN(num) || parseInt(num) <= 100));

// if (num !== null) {
//   console.log("Введене число більше за 100:", num);
// } else {
//   console.log("Ввід скасований або введено порожній рядок.");
// }

//((b))

// let number;

// do {
//   number = prompt("Введіть число більше за 100:", "");

//   if (number === null) {
//     break; // Вихід з циклу при натисканні "Скасувати"
//   }

//   number = Number(number);
// } while (isNaN(number) || number <= 100);

// if (number !== null) {
//   console.log(`Ви ввели число ${number} більше за 100.`);
// } else {
//   console.log("Ви скасували ввід або ввели порожній рядок.");
// }

//(((c)))

// while (true) {
//   let value = +prompt("Введіть число більше 100!");
//   if (!value) break;
//   else if (value > 100) {
//     alert("Молодець! Твоє число = " + value);
//     break;
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

///(((a)))

// let value = 0;
// let i = 0;
// for (i = 0; i < girls.length; i++) {
//   value += girls[i].age;
// }
// console.log(`Середній вік ${value / i} років`);

///(((b))) не правильный вариант

// let arr = [23, 29, 10, 20];
// let sum = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(sum); // 20.5
