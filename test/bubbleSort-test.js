const chai = require('chai');
const { assert, expect } = chai;
const bubbleSort = require('../lib/bubbleSort.js');

chai.use(require(chai.sorted));

describe('bubbleSort', () => {


  it.only('should be a function', () => {
    expect(bubbleSort).to.be.a.function;
  });

  it('should sort an array of numbers', () => {

  })

  it('should sort a large array of numbers', () => {
    //let randomArray = randomNumber();
    //bubbleSort();    
    expect(randomArray).to.be.sorted({descending: false});
});
});