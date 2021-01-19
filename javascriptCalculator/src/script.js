console.log('it works');
numbers = document.querySelectorAll('.number');
display = document.querySelector('.display');
userInputDisplay = document.querySelector('.upper-display');
resultDisplay = document.querySelector('.lower-display');
operators = document.querySelectorAll('.operator');
equalsButton = document.getElementById('equals');
clearButton = document.getElementById('clear');



let input1 = 0;
let input2 = 0;
let operator;
let operatorValue = 0;
let result;
let equalsPressed = false;

const setInput = (value) => {
    console.log('current operator '+ operator);
    if(!operator) {
        input1 += value; //add the next number to input one if more than single digit
        input1 = Number(input1); //convert to number
        userInputDisplay.innerHTML = input1; //display number
        console.log(`input1 set inputfunction ${input1}`);
    }  else {
        input2 += value;
        input2 = Number(input2);
        userInputDisplay.innerHTML += input2; 
        console.log(`input2 set inputfunction ${input2}`);
    }
}

const add = (a, b) => {
    result = a + b;
    displayResult(result);
    input1 = result;
    console.log(`input one after calc ${input1}`);
}
const subtract = (a, b) => {
    result = a - b;
    displayResult(result);
    input1 = result;
}
const multiply = (a, b) => {
    console.log(result);
    result = a * b;
    displayResult(result);
    input1 = result;
}

// function multiply (array) {
// 	return array.reduce((a, b) => a * b);
// }

const divide = (a, b) => {
    if (b === 0) {
        displayResult( 'cannot divide by zero');
    } else {
        result = a / b;
        console.log(result);
        displayResult(result);
        input1 = result;        
    }
}

const displayResult = (value) => {
    resultDisplay.innerHTML = value;
}

const setOperator = (operatorValue) => {
    operator = operatorValue;
    userInputDisplay.innerHTML += ` ${operatorValue} `;
    calculate();
    operatorValue++;
    console.log(operatorValue);
}

const reset = () => {
    input1 = 0;
    input2 = 0;
    result = null;
    operator = null;
}

const clearDisplay = () => {
    reset();
    displayResult(' ');
    userInputDisplay.innerHTML = '';
}

const calculate = () => {
    console.log('calculating..');
    //equalsPressed = true;
    console.log(operator);
    if (operator === '+') {
        add(input1, input2);
    } else if (operator === '-') {
        subtract(input1, input2);
    } else if(operator === '*') {
        multiply(input1, input2);
    } else if(operator === '/') {
        divide(input1, input2);
    } else {
        reset();
        return 'error';
        
    }
} 

//add event listener to numbers buttons 
numbers.forEach(number => {
    number.addEventListener('click', event => {
        setInput(event.target.value);
    });
}); 
//add event listener to operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        setOperator(event.target.value);

    })
})

    
clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', calculate);
