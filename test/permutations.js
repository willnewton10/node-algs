var assert = require('assert');

var permutations = require('../lib/permutations');



describe("permutations", function () {
    it('should return similar array when 0 or 1 elements', function () {
	assert.deepEqual([ ], permutations([ ]) );
	assert.deepEqual([[1]], permutations([1]) );
    });
    it('should return all permutations of arrays with more than 1 elements', function () {
	assert.deepEqual([[2,1],[1,2]], permutations([1,2]));
	assert.deepEqual([[2,3,1],[3,2,1],[3,1,2],[1,3,2], [2,1,3], [1,2,3]],
			 permutations([1,2,3]));
    });
});

