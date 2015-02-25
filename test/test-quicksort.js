var quicksort = require('../lib/quicksort');
var assert = require('assert');

console.log("this happens");

describe("quicksort", function () {
    it('should ... sort the list!', function () {
	assert.deepEqual(quicksort([]), []);
	assert.deepEqual(quicksort([2,1,3]), [1,2,3]);
	assert.deepEqual(quicksort([1,1,0]), [0,1,1]);
	assert.deepEqual(quicksort([0]), [0]);
	assert.deepEqual(quicksort([5,4,3,2,1]), [1,2,3,4,5]);
	assert.deepEqual(quicksort([10,10,8,8,7,7,3,1]), [1,3,7,7,8,8,10,10]);
    });
});
