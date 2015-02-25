var assert = require('assert');

var floydWarshall = require('../lib/floyd-warshall');

var _ = Infinity;

describe("floyd-warshall", function () {
    it('should return distance matrix of "all-pairs shortest paths"', function () {
	/* source: Website: Geeks for Geeks */
	var graph = [
	    [0, 5, _, 10],
	    [_, 0, 3,  _],
	    [_, _, 0,  1],
	    [_, _, _,  0]
	];
	var expected = [
	    [0, 5, 8, 9],
	    [_, 0, 3, 4],
	    [_, _, 0, 1],
	    [_, _, _, 0]
	];
	var result =  floydWarshall(graph);
	assert.deepEqual(expected, result.distances);
    });
    it("should return a predecessor matrix, for every path " + 
       "and a function 'getPath' that can get shortest path from pred matrix", function () {
	/* source: Book: Algorithms Unlocked by Thomas H. Cormen */
	var graph = [
	    [0,3,8,_],
	    [_,0,_,1],
	    [_,4,0,_],
	    [2,_,-5,0]
	];
	var expected = [
	    [0,3,-1,4],
	    [3,0,-4,1],
	    [7,4,0,5],
	    [2,-1,-5,0]
	];
	var result = floydWarshall(graph);
	assert.deepEqual(expected, result.distances);

	var n = null;
	var expectedPred = [
	    [n,0,3,1],
	    [3,n,3,1],
	    [3,2,n,1],
	    [3,2,3,n],
	];
	    
	assert.deepEqual(expectedPred, result.predecessors);

	/* recreate path with predecessor matrix */
	assert.deepEqual([0,1], result.getPath(0,1));
	assert.deepEqual([0,1,3,2], result.getPath(0,2));
	assert.deepEqual([2,1,3,0], result.getPath(2,0));
	assert.deepEqual([3,2,1], result.getPath(3,1));
    });
});
