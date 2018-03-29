const chai = require('chai');
const assert = chai.assert;
const quickSort = require('../lib/quickSort.js');
const createRandomArray = require('./random-array.js');

describe('quickSort', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it('should sort an array of numbers', () => {
    let numberArray = [5, 56, 23, 2, 8, 12, 100, 11, 67, 39];

    assert.deepEqual(quickSort(numberArray), [ 2, 5, 8, 11, 12, 23, 39, 56, 67, 100 ]);
  });

  it('should sort an array of negative numbers', () => {
    let numberArray = [-5, -56, -23, -2, -8, -12, -100, -11, -67, -39];

    assert.deepEqual(quickSort(numberArray) [ -100, -67, -56, -39, -23, -12, -11, -8, -5, -2 ]);
  });

  it('should sort an array of letters', () => {
    let alphaArray = ['z', 'f', 't', 'e', 'x', 'h', 'b', 'k', 's', 'l'];

    assert.deepEqual(quickSort(alphaArray), [ 'b', 'e', 'f', 'h', 'k', 'l', 's', 't', 'x', 'z' ]);
  });
  
  it('should sort a large array of numbers', () => {
    let randomArray = createRandomArray.createRandomArray(0, 1500);

    for (let i = 1; i < randomArray.length; i++) {
      const sortedArray = quickSort(randomArray);

      assert.isAtLeast(sortedArray[1], sortedArray[0]);
    }
  });
});