let input1; //prevVal ??
let input2; //newVal??
let result;
let operator;
console.log('it works');

// display values 
const displayInput = value => {
  document.getElementById('display').innerHTML = value;
  console.log(`you clicked ${value}`);  
}


//define a function to set input as value 
 const setInput = value => {
  if (input1) {
    input2 = Number(value);
    
    console.log(input2);
  } else {
    input1 = Number(value);
    
    console.log(input1);
  }

}
    // if there is no operator, then add value to input 1
//     if (!operator) {
      
      
//       displayInput(input1);
//       console.log(input1);
      
//     }
//     input2 = Number(value);
//     document.getElementById('display').innerHTML = twoDigitInput;
//   } else {
//     input1 = Number(value);

//   }
//   console.log(input2);
  
// };


//define function to clear input values after each calculation
const clear = () => {
  input1 = null;
  input2 = null;
  operator = null;
  result = null;
  document.getElementById('display').innerHTML = 0;
}


//define operator functions
 const add = (a, b) => {
  operator = 'addition';
  return a + b;
}

 const subtract = (a, b) => {
  operator = 'subtract';
  return a - b;
}

 const multiply = (a, b) => {
  operator = 'multiply';
  return a * b;
}

 const divide = (a, b) => {
  operator = 'divide';
  if (b == 0) {
    return document.getElementById('display').innerHTML = 'Cannot divide by 0';
  }
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
    default: document.getElementById('display').innerHTML  = 'err';
      break;
  }
  
 
}

//define function for clear button 
const clearDisplay = () => {
  document.getElementById('display').innerHTML = '0';
}
