import React from 'react';
import App from '../App';

class ClassCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: null, 
      input1: null,
      input2: null,
      output: 0,
      isEqualPressed: false,
    };
  }
  setInput = value => {
    if (input1) {
      // if there is no operator, then add value to input 1
      if (!operator) {
        let twoDigitInput = this.setState.input1.toString().concat(value);
        input1 = Number(twoDigitInput);
        
      }
      input2 = Number(value);
    } else {
      input1 = Number(value);

    }
  };
  add = (a, b) => {
    return a + b;
  };

  subtract = (a, b) => {
    return a - b;
  };

  multiply = (a, b) => {
    return a * b;
  };

  divide = (a, b) => {
    if (b===0){
      return 'do not divide by 0';
    }
    return a / b;
  };



  clear = () => {
    this.setState({
      input2: null,
      input1: null, 
      operator: null,
      output: 0,
      isEqualPressed: false,
    })
  };

  calculate = () => {
    switch(this.state.operator) {
      case 'addition': document.getElementById('display').innerHTML = add(this.state.input1, this.state.input2);
        clear();
        break;
      case 'subtract': document.getElementById('display').innerHTML = subtract(this.state.input1, this.state.input2);
        clear();
        break;
      case 'multiply': document.getElementById('display').innerHTML = multiply(this.state.input1, this.state.input2);
        clear();
        break;
      case 'divide': document.getElementById('display').innerHTML = divide(this.state.input1, this.state.input2);
        clear();
        break;
      default: document.getElementById('display').innerHTML = 'err';
        break;
    }

  }



//something that we actually display
  render () {
    return (
      <div>
        <h1>Vanilla JavaScript Calculator</h1>
        <div className ="calculator">
          <div className="container">
            <div className="item calculatorDisplay" id="display">0</div>
            <button
              className="item number"
              value="1"
              onClick={setInput(value)}
              id="number1"
            >
              1
        </button>
            <button
              className="item number"
              value="2"
              onClick={setInput(value)}
              id="number2"
            >
              2
        </button>
            <button
              className="item number"
              type="button"
              value="3"
              onClick={setInput(value)}
              id="number3"
            >
              3
        </button>
            <button
              className="item operator"
              type="button"
              onClick={add(input1, input2)}
              id="add"
              value="+"
            >
              +
        </button>
            <button
              className="item number"
              type="button"
              value="4"
              onClick={setInput(value)}
              id="number4"
            >
              4
        </button>
            <button
              className="item number"
              type="button"
              value="5"
              onClick={setInput(value)}
              id="number5"
            >
              5
        </button>
            <button
              className="item number"
              type="button"
              value="6"
              onClick={setInput(value)}
              id="number6"
            >
              6
        </button>
            <button
              className="item operator"
              type="button"
              onClick={subtract(input1, input2)}
              id="subtract"
              value="-"
            >
              -
        </button>
            <button
              className="item number"
              type="button"
              value="7"
              onClick={setInput(value)}
              id="number7"
            >
              7
        </button>
            <button
              className="item number"
              type="button"
              value="8"
              onClick={setInput(value)}
              id="number8"
            >
              8
        </button>
            <button
              className="item number"
              type="button"
              value="9"
              onClick={setInput(value)}
              id="number9"
            >
              9
        </button>
            <button
              className="item operator"
              type="button"
              onClick={divide(input1, input2)}
              id="divide"
              value="/"
            >
              /
        </button>
            <button className="item" type="button" onClick={clearDisplay()} id="clear">
              C
        </button>
            <button
              className="item number"
              type="button"
              value="0"
              onClick={setInput(value)}
              id="number0"
            >
              0
        </button>

            <button
              className="item operator"
              type="button"
              onClick={calculate()}
              id="equals"
              value="="
            >
              =
        </button>
            <button
              class="item operator"
              type="button"
              onClick={multiply(input1, input2)}
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

}

export default ClassCalculator;