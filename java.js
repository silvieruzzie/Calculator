let numberA = '';
let numberB = '';
let operator = '';
let result = '';
let rounded;
let isOperatorSelected = false;
let isPointSelected = false;
let displayValue = document.querySelector('.display');

const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const equal = document.querySelector('.equal');
const cancel = document.querySelector('.ca');
const point = document.querySelector('.point');

//event listeners

numbers.addEventListener('click', function(event) {
    if (event.target.matches('.number')) {
//use boolean to store the numbers selected either in the numberA or numberB
      const value = event.target.textContent;
      if (isOperatorSelected) {
        numberB += value;
      } else {
        numberA += value;
      }
      populate(value);
    }
  });

operators.addEventListener('click', function(event) {
    if (event.target.matches('.operator')) {
//if you press another operator before pressing = the calc will evaluate the first two values, return the result followed by the operator selected.
      if (numberA && isOperatorSelected && numberB ) {
        result = operate(parseFloat(numberA), operator, parseFloat
        (numberB));
        result = parseFloat(result.toFixed(10));
        displayValue.textContent = '';
        populate(result);
        numberA = result.toString();
        numberB = '';
        operator = event.target.textContent;
      };     
      if (numberA) {
        operator = event.target.textContent;
// change the value to the isOperatorSelected variable to true
        isOperatorSelected = true;
        populate(operator);
      }
    }
    isPointSelected = false;
  });

equal.addEventListener('click', function(event) {
if (numberA && operator && numberB) {
//take the value stored in the numberA/B, turn them into floating point numbers 
    result = operate(parseFloat(numberA), operator, parseFloat(numberB));
    result = parseFloat(result.toFixed(10));
    displayValue.textContent = result;
//the result gets assigned to numberA turned into a string, can be used for the next operation
    numberA = result.toString();
    numberB = '';
    operator = '';
    isOperatorSelected = false;
    isPointSelected = false;
}
});

cancel.addEventListener('click', function(event) {
    displayValue.textContent = ' ';
    numberA = '';
    numberB = '';
    operator = '';
    isOperatorSelected = false;
});

point.addEventListener('click', function(event) {
//the '.' gets assigned to the value variable.
    const value = event.target.textContent;
    if (isPointSelected == true) {
        
    } else {
        if (isOperatorSelected) {
            numberB += value;
        } else {
            numberA += value;
        }
        populate(value);
        isPointSelected = true;
    }
});
    

//functions

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if(numberA && operator && (numberB == '0')) {
        displayValue.textContent = 'Don\'t do dat'
    } else {
        return a / b;
    }    
}
function populate(value) {
    displayValue.textContent += value;
}

function operate(a, operator, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return null;
    }
  }