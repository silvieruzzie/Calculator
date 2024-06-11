function add(a, b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
let numberA;
let numberB;
let operator;
let displayValue;

function populate(value) {
displayValue = document.querySelector('.display')
displayValue.textContent = value;
}

