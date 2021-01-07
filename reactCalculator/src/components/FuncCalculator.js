import React from 'react';
import App from '../App';

const FuncCalculator = () => {
  const result = 200;
  const setOperator = (event) => { 
    console.log('set operator is called', event.target.value);
  };

  const setInput = (event) => {
    console.log('setInput is called', event.target.value);
   };

   const displayInput = (event) => {
     console.log('displayInput is called', event.target.value);
   }
  //something that we actually display
  
    return (
      <div>
        <h1>Vanilla JavaScript Calculator</h1>
        <div className="calculator">
          <div className="container">
    <div className="item calculatorDisplay" id="display">the result is {result}</div>
            <button
              className="item number"
              value="1"
              onClick={setInput}
              id="number1"
            >
              1
        </button>
            <button
              className="item number"
              value="2"
              onClick={setInput}
              id="number2"
            >
              2
        </button>
            <button
              className="item number"
              type="button"
              value="3"
              onClick={setInput}
              id="number3"
            >
              3
        </button>
            <button
              className="item operator"
              type="button"
              onClick={setOperator}
              id="add"
              value="+"
            >
              +
        </button>
            <button
              className="item number"
              type="button"
              value="4"
              onClick={setInput}
              id="number4"
            >
              4
        </button>
            <button
              className="item number"
              type="button"
              value="5"
              onClick={setInput}
              id="number5"
            >
              5
        </button>
            <button
              className="item number"
              type="button"
              value="6"
              onClick={setInput}
              id="number6"
            >
              6
        </button>
            <button
              className="item operator"
              type="button"
              onClick={setOperator}
              id="subtract"
              value="-"
            >
              -
        </button>
            <button
              className="item number"
              type="button"
              value="7"
              onClick={setInput}
              id="number7"
            >
              7
        </button>
            <button
              className="item number"
              type="button"
              value="8"
              onClick={setInput}
              id="number8"
            >
              8
        </button>
            <button
              className="item number"
              type="button"
              value="9"
              onClick={setInput}
              id="number9"
            >
              9
        </button>
            <button
              className="item operator"
              type="button"
              onClick={setOperator}
              id="divide"
              value="/"
            >
              /
        </button>
            <button className="item" type="button" onClick="clearDisplay()" id="clear">
              C
        </button>
            <button
              className="item number"
              type="button"
              value="0"
              onClick={setInput}
              id="number0"
            >
              0
        </button>

            <button
              className="item operator"
              type="button"
              onClick="displayInput(value); calculate()"
              id="equals"
              value="="
            >
              =
        </button>
            <button
              class="item operator"
              type="button"
              onClick={setOperator}
              id="multiply"
              value="x"
            >
              *
        </button>
          </div>
        </div>
      </div>
    )
  }


export default FuncCalculator;