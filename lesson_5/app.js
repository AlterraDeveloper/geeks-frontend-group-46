// DOM - Document Object Model

// 1. search

let $counter = document.getElementById("counter");

let $btnMinus = document.getElementById("btn-minus");
let $btnReset = document.querySelector("#btn-reset");
let $btnPlus = document.querySelector("#btn-plus");

console.log("counter = ", $counter);
console.log("minus = ", $btnMinus);
console.log("reset = ", $btnReset);
console.log("plus = ", $btnPlus);

// 2. Edit (text, styles, classes)

function addCounter() {
    let counterValue = Number($counter.innerText);
    counterValue++;
    $counter.innerText = String(counterValue);
    changeCounterColor();
}

function changeAppTitle() {
    let h1 = document.querySelector('.container h1');
    h1.style.color = "greenyellow";
}

function resetAppTitle() {
    let h1 = document.querySelector('h1');
    h1.style.color = "cyan";
}

$btnPlus.addEventListener("click", addCounter);
$btnPlus.addEventListener("mouseover", changeAppTitle);
$btnPlus.addEventListener("mouseleave", resetAppTitle);

function resetCounter() {
    $counter.textContent = "0";
    changeCounterColor();
}

function reduceCounter() {
    let counterValue = Number($counter.innerText);
    counterValue--;
    $counter.innerText = String(counterValue);
    changeCounterColor();
}

$btnMinus.onclick = reduceCounter;

function changeCounterColor() {
    let counterValue = Number($counter.innerText);
    if (counterValue > 0) {
        $counter.style.color = "greenyellow";
    }
    if (counterValue < 0) {
        $counter.style.color = "red";
    }
    if (counterValue === 0) {
        $counter.style.color = "cyan";
    }
}