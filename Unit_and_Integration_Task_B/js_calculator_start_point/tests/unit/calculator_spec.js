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
    const actual = calculator.add(4)
    assert.equal(actual, 5)
  })

  it('subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    const actual = calculator.subtract(4)
    assert.equal(actual, 3)
  })

  it('multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 5;
    const actual = calculator.multiply(3)
    assert.equal(actual, 15)
  })

  it('divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    const actual = calculator.divide(7)
    assert.equal(actual, 3)
  })

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
