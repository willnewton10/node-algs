var assert = require('assert');

var mergesort = require('../lib/mergesort');



describe("mergesort", function () {
    it('should return similar array when 0 or 1 elements', function () {
	assert.deepEqual([], mergesort([]));
    }),
    it('should return sorted array when given more elements', function () {
	assert.deepEqual([1], mergesort([1]));
	assert.deepEqual(["a"], mergesort(["a"]));
    }),
    it('should sort an array with 2 elements', function () {
	assert.deepEqual([1,2], mergesort([1,2]));
	assert.deepEqual([1,2], mergesort([2,1]));
	assert.deepEqual(['a','b'], mergesort(['b','a']));
	assert.deepEqual(['a','b'], mergesort(['a','b']));
    }),
    it('should return a sorted array when values not sorted', function () {
	assert.deepEqual([1,2], mergesort([2,1]));
	assert.deepEqual(['a','b'], mergesort(['b', 'a']));
	assert.deepEqual([1,2,3,3,4], mergesort([2,3,1,4,3]));
	assert.deepEqual(['a','b','c','c','d'], mergesort(['c','d','a','c','b']));
	
	assert.deepEqual([1,10,11], mergesort([10,11,1]));

	
	var n = 5000;
	var unsorted = new Array(n);
	var sorted = new Array(n);
	for (var i=0; i<n; i++) {
	    sorted[i] = i;
	    unsorted[i] = n - i - 1;
	}
	var testSorted = mergesort(sorted, function (a,b) { return a >= b; });
	assert.deepEqual(unsorted.length, testSorted.length);
	assert.deepEqual(unsorted, testSorted );
    });
});
