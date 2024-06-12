let numberA;
let numberB;
let operator;
let result;
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
const point = document.querySelector('.point');

//event listeners

numbers.addEventListener('click', function(event) {
  if (event.target.matches('.number')) {
    console.log(event.target.textContent);
    populate(event.target.textContent);
  }
});

operators.addEventListener('click', function(event) {
    if (event.target.matches('.operator')) {
      populate(event.target.textContent);
      operator = event.target.textContent;
      console.log(operator)
    }
  });

equal.addEventListener('click', function(event) {
    operate(numberA, operator, numberB);
});

cancel.addEventListener('click', function(event) {
    displayValue.textContent = ' ';
});

point.addEventListener('click', function(event) {
    console.log(event.target.textContent);
      populate(event.target.textContent);
})

//functions

function add(a, b) {
    result = a + b;
    console.log(result);
    populate(result);
};
function subtract(a,b) {
    result = a - b;
    console.log(result);
};
function multiply(a,b) {
    result = a * b;
    console.log(result);
};
function divide(a, b) {
    result = a / b;
    console.log(result);
};

function populate(value) {
displayValue = document.querySelector('.display')
displayValue.textContent += value;
};

function operate(numberA, operator, numberB) {
if (operator === '+') {
    add(numberA,numberB);
} else if (operator === '-') {
    subtract(numberA,numberB);
} else if (operator === '*') {
    multiply(numberA,numberB);
} else if (operator === '/') {
    divide(numberA,numberB);
}};