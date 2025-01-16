document.write("Hello, Frontend!");
document.body.style.color = "gold";
document.body.style.fontSize = "6rem";
document.body.style.textAlign = "center";
document.body.style.margin = "200px";

setInterval(function(){
    const colors = ['red', "yellow", "green", "white", "orange", "pink", 'black', "brown", "blue", "chartreuse"];
    const randColor = colors[Math.round(Math.random() * colors.length) + 1];
    document.body.style.color = randColor;
}, 1000);

// V8 - JavaScript Engine


// variables - переменные
// data types - типы данных
// conditions - условия
// operators - операторы
// loops - циклы
// arrays - массивы
// functions - функции

// DevTools - инструменты разработчика
// console - консоль разработчика

let mySurname = "Kiselev"
let myName = "Evgeniy"
let myLastName = "Dmitrievich"

console.log(mySurname)
console.log(myName)
console.log(myLastName)

let group = 46
console.log("Hello, group " + group)

