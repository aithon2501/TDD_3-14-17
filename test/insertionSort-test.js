const chai = require('chai');
const assert = chai.assert;

const insertionSort = require('../lib/insertionSort.js');
const createRandomArray = require('./random-array.js');

describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should sort an array of numbers', () => {
    let numberArray = [5, 56, 23, 2, 8, 12, 100, 11, 67, 39];

    insertionSort(numberArray);
    assert.deepEqual(numberArray, [ 2, 5, 8, 11, 12, 23, 39, 56, 67, 100 ]);
  });

  it('should sort an array of negative numbers', () => {
    let numberArray = [-5, -56, -23, -2, -8, -12, -100, -11, -67, -39];

    insertionSort(numberArray);
    assert.deepEqual(numberArray, [ -100, -67, -56, -39, -23, -12, -11, -8, -5, -2 ]);
  });

  it('should sort an array of letters', function () {
    let alphaArray = ['z', 'f', 't', 'e', 'x', 'h', 'b', 'k', 's', 'l'];

    insertionSort(alphaArray);
    assert.deepEqual(alphaArray, [ 'b', 'e', 'f', 'h', 'k', 'l', 's', 't', 'x', 'z' ]);
  });
  
  it('should sort a large array of numbers', () => {
    let randomArray = createRandomArray.createRandomArray(-1000, 1000);

    insertionSort(randomArray);
    for (let i = 1; i < randomArray.length; i++) {
      assert.equal(randomArray[i - 1] <= randomArray[i], true);
    }
  });
});