var assert = require('assert');

var Heap = require('../lib/heap');

function heapFactory() {
    return new Heap(function (a, b) { return a - b; });
}

describe("Heap", function () {
    it('it should let you know if there are no elements', function () {
	var heap =heapFactory();
	assert.equal(heap.any(), false);
	
    });
    it('should say so when it does have elements', function () {
	var heap = heapFactory();
	
	heap.add(1);
	assert.equal(heap.any(), true);
    });
    it('should know when you have removed all elements', function () {
	var heap = heapFactory();
	heap.add(1);
	var x = heap.pop();
	assert.equal(heap.any(), false);
    });
    it('should provide a sorted collection when all elements popped', function () {
	var heap = heapFactory();

	var elements = [8,4,5,2,3,1,7];
	elements.forEach(function (el) {
	    heap.add(el);
	});

	var popped = [];
	while(heap.any()) popped.push(heap.pop());

	assert.deepEqual(elements.sort(), popped);
    });
});
