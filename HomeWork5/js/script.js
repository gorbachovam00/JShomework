// --------1--------
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

//((((((a))))))

// const infoStudent = {
//   name: "Maria",
//   specialty: "engineer",
//   gpa: 190,
//   missed: 3,
//   showInfo: function () {
//     console.log(
//       " Студент:" +
//         this.name +
//         " спеціальність:" +
//         this.specialty +
//         " середній бал:" +
//         this.gpa +
//         " пропущені уроки:" +
//         this.missed
//     );
//   },
// };

// infoStudent.showInfo();

// student2 = {
//   name: "Oleksiy",
//   specialty: "philosophy",
//   gpa: 156,
//   missed: 8,
// };

// infoStudent.showInfo.bind(student2)();

// student3 = {
//   name: "Tetiana",
//   specialty: "technologist",
//   gpa: 200,
//   missed: 0,
// };

// infoStudent.showInfo.call(student3);

// student4 = {
//   name: "Andrii",
//   specialty: "translator",
//   gpa: 178,
//   missed: 1,
// };

// infoStudent.showInfo.apply(student4);

//(((((b)))))

// const infoStudent = {
//   name: "Maria",
//   specialty: "engineer",
//   gpa: 190,
//   missed: 3,
//   showInfo: function () {
//     console.group(`${name}info:`);
//     console.log(`Name is:${this.name}`);
//     console.log(`Specialty is:${this.specialty}`);
//     console.log(`Gpa is:${this.gpa}`);
//     console.log(`Missed is:${this.missed}`);
//     console.groupEnd();
//   },
// };

// infoStudent.showInfo();

// student2 = {
//   name: "Oleksiy",
//   specialty: "philosophy",
//   gpa: 156,
//   missed: 8,
// };

// infoStudent.showInfo.bind(student2)();

// student3 = {
//   name: "Tetiana",
//   specialty: "technologist",
//   gpa: 200,
//   missed: 0,
// };

// infoStudent.showInfo.call(student3);

// student4 = {
//   name: "Andrii",
//   specialty: "translator",
//   gpa: 178,
//   missed: 1,
// };

// infoStudent.showInfo.apply(student4);

// ---------2--------
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// function html() {
//   console.log("HTML- це мова розмітки за допомогою тегів");
// }

// function css() {
//   console.log(
//     "CSS-спеціальна мова, що використовується для запису оформлення сторінок, написаних мовами розмітки даних."
//   );
// }

// document.querySelector("#html").addEventListener("click", html);
// document.querySelector("#css").addEventListener("click", css);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(name, cost, quantity) {
//   const shop = cost * quantity;
//   return `Назва продукту: ${name}, Ціна: ${shop.toFixed(1)}`;
// }

// const Banana = shop("Banana", 30, 4.5);
// console.log(Banana);

// const Cherry = shop("Cherry", 58, 1.3);
// console.log(Cherry);

// const Orange = shop("Orange", 89, 3.4);
// console.log(Orange);
