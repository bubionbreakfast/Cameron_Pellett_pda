var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it has to divide two numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3)
  });

  it('it has to concatenate multiple number button clicks', function(){
    calculator.runningTotal = 0
    calculator.numberClick(4)
    calculator.numberClick(7)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 473)
  });

  it('it has to chain multiple operations together', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('/')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 8)
  });

  it('it has to clear the running total without affecting calculation', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.clearClick()
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, '11')
  });

  

});
