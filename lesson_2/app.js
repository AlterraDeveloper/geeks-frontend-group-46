console.log('lesson 2');

// syntax - синтаксис
// keywords - ключевые слова

// variables - переменные
// let, const, var

// data types - типы данных

// 1. string - текст
// 2. number - числа
// 3. boolean - булевский (логический)

// camelCase

let carBrand = "KIA";
let carModel = 'K5';
let carColor = "white";

carModel = "K7";

// concatenation - конкатенация
let carFullName = carBrand + " " + carModel;
console.log("My car is:", carFullName);


const carProdYear = 2019;
const carPower = 220; // in horse power

let carMileage = 140_000;
let carVolume = 2.5;

// carProdYear = 2022;  error

// number operators: + - * / ** %
// += -= *= /= **= %=
// DRY - Don't repeat yourself

// carMileage = carMileage - 50_000;
// carMileage -= 50_000;
// carMileage += 25_000;
carMileage /= 2;
console.log("Current mileage is:", carMileage);

let isElectroCar = false;
let isPassedCustom = false;

let customPrice = 1000;

// conditions - условия

if (isElectroCar) {
    customPrice *= 0.5; // discount 50%
}

console.log("My custom price is:", customPrice + "$");

if (isPassedCustom) {
    console.log("Go to registration ->");
} else {
    console.warn("Car doesn't pass custom control");
}

let login = prompt("Enter your login");
let password = prompt("Enter your password");

console.log(login, password);

if (login == "evgeniy_front" && password === "123456") {
    console.log("Welcome Evgeniy Kiselev");
} else {
    console.error("Login failed. Invalid login or password.");
}

// obfuscation - обфускация

let regionCode = "01";

if (regionCode === "92") {
    console.log("Litres = ", 1000 / 67);
} else if (regionCode === "02") {
    console.log("Osh");
} else if (regionCode === "03") {
    console.log("Batken");
} else if (regionCode === "04") {

} else if (regionCode === "05") {

} else if (regionCode === "06") {

} else if (regionCode === "07") {

} else if (regionCode === "08") {

} else {
    console.error("Invalid region code.");
}

let currency = prompt('enter currency');
let amount = prompt('enter amount');



