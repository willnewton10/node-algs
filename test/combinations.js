
var assert = require('assert');
var combinations = require('../lib/combinations');

describe("combinations", function () {
    it("should return the empty list when given an empty list", function () {
	assert.deepEqual([[]], combinations([]));
    });
    it('should return single-element list plus empty list when given single element list', function () {
	assert.deepEqual([[],[1]], combinations([1]));
    });
    it('should return all combinations of lists with more than 1 elements', function () {
	assert.deepEqual([
	    [],
	    [1], [2], [1,2],
	    [3], [1,3], [2,3], [1,2,3],
	    [4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[2,3,4],[1,2,3,4]
	], combinations([1,2,3,4]));
    });
    it('should return arrays of size n when passed in size as second arg', function () {
	assert.deepEqual([
	    [1,2],
	    [1,3], [2,3],
	    [1,4],[2,4],[3,4]
	], combinations([1,2,3,4], 2));
    });
});

