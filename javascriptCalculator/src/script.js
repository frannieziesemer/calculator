numbers = document.querySelectorAll('.number');
display = document.querySelector('.display');
upperDisplay = document.querySelector('.upper-display');
lowerDisplay = document.querySelector('.lower-display');
operators = document.querySelectorAll('.operator');
equalsButton = document.getElementById('equals');
clearButton = document.getElementById('clear');



let input1 = 0;
let input2 = 0;
let operator;
let result;

const setInput = (value) => {
    if(!operator) {
        //convert to number and +=
        input1 += value; //add the next number to input one if more than single digit
        input1 = Number(input1); //convert to number
        console.log(`input1 @ setInput if(!operator) ${input1}`);
    }  else if(input1) {
        input2 += value;
        input2 = Number(input2);
        console.log(`input2 @setInput(input1) ${input2}`);
    } 
}

const add = (a, b) => {
    result = a + b;
}
const subtract = (a, b) => {
    result = a - b;
}
const multiply = (a, b) => {
    result = a * b;
}
const divide = (a, b) => {
    if (b === 0) {
        lowerDisplay.textContent = 'cannot divide by 0';
    } else {
        result = a / b;     
    }
}

const displayInput = (value) => {
    upperDisplay.textContent += value;
}

const displayResult = (result) => {
    lowerDisplay.textContent = result;
}

const setOperator = (operatorValue) => {
    operator = operatorValue;
    calculate();
    operatorValue++;
    console.log(`operator at setOperator ${operator}`);
}

const reset = () => {
    input1 = 0;
    input2 = 0;
    result = null;
    operator = null;
    clearDisplay();
}

const clearDisplay = () => {
    upperDisplay.innerHTML = '';
    lowerDisplay.innerHTML = '';
}

const handleEqualsClick = () => {
    calculate();
    displayResult(result);
}

const calculate = () => {
    //equalsPressed = true;
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
    console.log(`result @ calculate ${result} next reset`);
    
} 

//add event listener to numbers buttons 
numbers.forEach(number => {
    number.addEventListener('click', event => {
        setInput(event.target.value);
        displayInput(event.target.value);
    });
}); 

//add event listener to operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', event => {
        setOperator(event.target.value);
        displayInput(event.target.value);
    })
})

    
clearButton.addEventListener('click', reset);
equalsButton.addEventListener('click', handleEqualsClick);
