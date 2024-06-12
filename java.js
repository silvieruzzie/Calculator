let numberA;
let numberB;
let operator;
let displayValue;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const equal = document.querySelector('.equal');
const cancel = document.querySelector('.ca');

//event listeners

numbers.addEventListener('click', function(event) {
  if (event.target.matches('.number')) {
    console.log(event.target.textContent);
  }
});

operators.addEventListener('click', function(event) {
    if (event.target.matches('.operator')) {
      console.log(event.target.textContent);
    }
  });

equal.addEventListener('click', function(event) {
    console.log(event.target.textContent);
});

cancel.addEventListener('click', function(event) {
    console.log(event.target.textContent);
});

//functions

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

function populate(value) {
displayValue = document.querySelector('.display')
displayValue.textContent = value;
}