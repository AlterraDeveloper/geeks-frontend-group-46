// data types - типы данных

// 1. string - текст
// 2. number - числа
// 3. boolean - булевский (логический)
// 4. undefined - неопределенный
// 5. null - пустой
// 6. object - объект
// -----
// 7. BigInt
// 8. Symbol

// typeof
// typeof null - это баг

let isPregnant = true;

if (isPregnant) {
    console.log("Do gender party!")
}

// операторы сравнения: > < >= <= == === !=

let carMileage = 300_000;

if (carMileage > 200_000) {
    console.log("Car is not for me");
}

let myBirthdate; // undefined
console.log("myBirthdate = ", myBirthdate);

myBirthdate = null;
console.log("myBirthdate = ", myBirthdate);

let car = {
    year: 2021,
    mileage: 59_000,
    engine: {
        volume: 2.5,
        type: 'fuel'
    },
    inStock: true,
    VIN: '454**********',
    price: 21900,
    onControl: false
};

car.year = 2024;

console.log("Год выпуска:", car.year);
console.log("Пробег:", car['mileage'] + " км");
console.log("Объем двигателя:", car.engine.volume + " л");

let carFuelType;

if (car.engine.type === 'fuel') {
    carFuelType = "Бензин"
} else if (car.engine.type === 'diesel') {
    carFuelType = "Дизель"
} else if (car.engine.type === 'gas') {
    carFuelType = "Газ";
} else {
    carFuelType = "Не определено";
}

switch (car.engine.type) {
    case 'fuel': // ===
        carFuelType = "Бензин"
        break;
    case 'diesel':
        carFuelType = "Дизель"
        break;
    case 'gas':
        carFuelType = "Газ";
        break;
    default:
        carFuelType = "Не определено";
        break;
}

// == non strict equation
// === strict


// let wallet = 1000;
//
// let amount = prompt("Enter amount");
//
// wallet += Number.parseInt(amount);
// console.log("Current balance:", wallet);

// Array - массив

let carOwners = ["Akylbek", 'Samat', 'Altynai'];
// indexes:                 0          1         2
carOwners.push("Evgeniy");
console.log("Количество владельцев:", carOwners.length);
console.log("Первый владелец:", carOwners[0]);
console.log("Текущий владелец:", carOwners[carOwners.length]);


// Loops - циклы

console.clear();

// for..of
let carFines = [300, 500, 1000, 300, 800];
let totalFines = 0;
let bigFinesCount = 0;
for(let fine of carFines){
    totalFines += fine;
    if(fine > 500) {
        bigFinesCount++;
    }
}
console.log("Total fines:", totalFines);
console.log("Big fines:", bigFinesCount);

// for
for(let i = 0; i < carOwners.length; i++){
    console.log((i + 1) + "-й владелец:", carOwners[i]);
}

// for(let i = 1; i <= carOwners.length; i++){
//     console.log(i + "-й владелец:", carOwners[i-1]);
// }

// while do..while

let vinCode = '4S4TR54AS23';

let name = "Evgeniy";
let surname = "Kiselev";




