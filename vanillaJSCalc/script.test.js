import { add, multiply, subtract, divide } from './script.js'



describe('calculator functions', () => {
  describe('adds', () => {
    test('1 and 2', () => {
      let result = add(1,2);
      expect(result).toEqual(3);
    })
    test('-4 and -3', () => {
      let result = add(-4,-3);
      expect(result).toEqual(-7);
    })
  })

  describe('multiplies', () => {
    test('2 and 3', () => {
      let result = multiply(2,3);
      expect(result).toEqual(6);
    })
  })

  describe('subtracts', () => {
    test('4 and 3', () => {
      let result = subtract(4,3);
      expect(result).toEqual(1);
    })
  })

  describe('divides', () => {
    test('6 and 2', () => {
      let result = divide(6,2);
      expect(result).toEqual(3);
    })
    test('does not divide by 0', () => {
      document.body.innerHTML = `<div id="display">test</div>`

      let display = document.getElementById("display");

      divide(1,0);
      expect(display.innerHTML).toEqual('Cannot divide by 0');
    })

  })

})