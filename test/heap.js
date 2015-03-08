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

	elements.sort(function (a, b) { return a - b; });
	assert.deepEqual(elements, popped);
    });
    it('should throw an exception when popping from empty state', function () {
	var heap = heapFactory();
	
	assert.throws(function () {
	    heap.pop();
	}, Error);
    });
    it('should throw an exception when adding an undefined or null element', function () {
	var heap = heapFactory();
	
	assert.throws(function () {
	    heap.add(undefined);
	}, Error);

	assert.throws(function () {
	    heap.add(null);
	}, Error);
    });
    it('should work for bigger arrays too', function () {
	var heap = heapFactory();

	var arr = [];
	
	var lastNumber = 11; /* arbitrary */
	var mod = 1334;      /* arbitrary */
	var factor = 131;    /* arbitrary */
	/* just generating some pseudo-pseudo-random-numbers predictably*/
	function generateNumber() {
	    lastNumber = (lastNumber * factor) % mod;
	    console.log("generate number", lastNumber);
	    return lastNumber;
	}

	for (var i=0; i<10000; i++) {
	    arr.push(generateNumber());
	    heap.add(arr[arr.length - 1]);
	}

	var arr2 = [];
	var last = -1;
	while(heap.any()) {
	    var el = heap.pop();
	    arr2.push(el);
	    last = el;
	}
	arr.sort(function (a, b) { return a - b; });
	assert.deepEqual(arr, arr2);
    });
});
