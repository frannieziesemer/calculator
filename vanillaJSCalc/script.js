let input1;
let input2;

let operator;

//define a function to set input as value 
const setInput = (value) => {
  //if else statement to take second value 
  if (input1) {
    input2 = Number(value);
    document.getElementById('display').innerHTML = input2;
  } else {
    input1 = Number(value);
    document.getElementById('display').innerHTML = input1;
  }
}
//define function to clear input values after each calculation
const clear = () => {
  input1 = undefined;
  input2 = undefined;

}


//define operator functions
const add = (a, b) => {
  operator = 'addition';
  document.getElementById('display').innerHTML = '+';
  return a + b;
}

const subtract = (a, b) => {
  operator = 'subtract';
  document.getElementById('display').innerHTML = '-';
  return a - b;
}

const multiply = (a, b) => {
  operator = 'multiply';
  document.getElementById('display').innerHTML = 'x';
  return a * b;
}

const divide = (a, b) => {
  operator = 'divide';
  document.getElementById('display').innerHTML = '/';
  return a / b;
}

const calculate = () => {
  switch(operator) {
    case 'addition': document.getElementById('display').innerHTML = add(input1, input2);
      clear();
      break;
    case 'subtract': document.getElementById('display').innerHTML = subtract(input1, input2);
      clear();
      break;
    case 'multiply': document.getElementById('display').innerHTML = multiply(input1, input2);
      clear();
      break;
    case 'divide': document.getElementById('display').innerHTML = divide(input1, input2);
      clear();
      break;
    default: document.getElementById('display').innerHTML = divide(input1, input2) = 'err';
      break;
  }
  
}

//define function for clear button 
const clearDisplay = () => {
  document.getElementById('display').innerHTML = '0';
}
