const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the running total when number buttons pushed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('211')
  })

  it('should update the result when adding two numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('should update the result when subtracting two numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3')
  })

  it('should update the result when multiplying two numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('16')
  })

  it('should update the result when dividing two numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should allow multiple operations to be chained', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should update the result when number is positive', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('73')
  }) 

  it('should update the result when number is negative', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-8')
  }) 

  it('should update the result when number has decimal point', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15.6')
  }) 

  it('should update the result when number is very large', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9495821434428')
  }) 

  it('should update the result when number is extremely large', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4789832893197066')
  })

  it("should display 'cannot divide by 0' when dividing by 0", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('cannot divide by 0')
  })

});
