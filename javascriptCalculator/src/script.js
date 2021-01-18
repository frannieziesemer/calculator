console.log('it works');
numbers = document.querySelectorAll('.number');
display = document.querySelector('.display');
operators = document.querySelectorAll('.operator');
equalsButton = document.getElementById('equals');
clearButton = document.getElementById('clear');



let input1;
let input2;
let operator;
let result;

const setInput = (value) => {
    console.log('current operator '+ operator);
    if(input1) {
        input2 = Number(value);
        console.log(input2);
    } else {
        input1 = Number(value);
        console.log(input1);
    }
}

const add = (a, b) => {
   // operator = 'add';
    result = a + b;
    console.log(result);
    displayValue(result);
}
const subtract = (a, b) => {
    result = a - b;
    console.log(result);
    displayValue(result);
}
const multiply = (a, b) => {
    console.log(result);
    result = a * b;
    displayValue(result);
}

// function multiply (array) {
// 	return array.reduce((a, b) => a * b);
// }

const divide = (a, b) => {
    if (b === 0) {
        displayValue( 'cannot divide by zero');
    } else {
        result = a / b;
        console.log(result);
        displayValue(result);
    }
}

const displayValue = (value) => {
    display.innerHTML = value;
}

const setOperator = (operatorValue) => {
    operator = operatorValue;
    console.log(operator + ' pressed');
}

const reset = () => {
    input1 = null;
    input2 = null;
    result = null;
    operator = null;
}

const clearDisplay = () => {
    reset();
    displayValue(0);
}

const calculate = () => {
    console.log('calculating..');
    console.log(operator);
    if (operator === 'add') {
        console.log('adding');
        add(input1, input2);
        reset();
    } else if (operator === 'subtract') {
        subtract(input1, input2);
        reset();
    } else if(operator === 'multiply') {
        multiply(input1, input2);
        reset();
    } else if(operator === 'divide') {
        divide(input1, input2);
        reset();
    } else {
        reset();
        return 'error';
        
    }
} 

//add event listener to numbers buttons 
numbers.forEach(number => {
    number.addEventListener('click', event => {
        displayValue(event.target.value);
        setInput(event.target.value);
    });
}); 
//add event listener to operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        displayValue(event.target.innerHTML);
        setOperator(event.target.value);
    })
})

    
clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', calculate);
