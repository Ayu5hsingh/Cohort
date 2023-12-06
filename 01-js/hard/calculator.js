/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const { error } = require("console");

class Calculator {

  constructor() {
    this.results = 0;
  }

  add(a) {
    this.results += a;
  }

  subtract(a) {
    this.results -= a;
  }

  multiply(a) {
    this.results *= a;
  }

  divide(a) {
    if (a===0){
      throw new Error("Numerator can't be divided by 0");
    }
    else{
      this.results/=a;
    }
  }

  clear() {
    this.results = 0;
  }

  calculate(str1) {
    // calculate: takes a string expression which can take multi - arithmetic operations and give its result
    // example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
    // Points to Note:
    // 1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
    // 2. the input can have invalid non - numerical characters like`5 + abc`, you're supposed to throw error for such inputs

    const removedSpace = str1.replace(/\s+/g, '');
    const isValidExpression = /^[0-9+\-*()/. ]+$/.test(removedSpace);
    if (!isValidExpression) {
      throw  new Error('Invalid input Expression');
    }
    try {
      const expressionResult = eval(removedSpace);
      if (Number.isFinite(expressionResult)) {
        this.results = expressionResult;
      }
      else {
        throw new Error("Number cant be divided by zero");
      }
    }
    catch (error) {
      throw error;
    }
  }

  getResult() {
    return this.results
  }


}

module.exports = Calculator;
