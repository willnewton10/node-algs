
/* A Heap is a collection of elements of some type T
   that keeps elements in sorted order
   so that if an element is removed, it will be the "lowest"
   element of all elements in the remaining collection.

   - adding and removal take log(n) time (to keep "heap property"
     valid... Heap property is beyond the scope of this comment)

   Heap constructor requires a COMPARE function with params A and B
   where A and B are of type T and:
   
      if A == B, it should return 0
      if A < B, it should return a number n < 0
      IF a > b, it should return a number n > 0

   For numbers, the compare function would normally be:
      function (a, b) { return a - b; }

   Heap has 3 public methods:

   1. add(element of type T) : void
      -> adds element to the heap
      -> element CANNOT be undefined or null
      -> element must be type T (comply with compare function)

   2. pop() : element of type T
      -> returns LOWEST element, removing it from heap

   3. any() : bool
      -> returns true if heap has any elements
      -> should only call pop() if any() returns true
*/
function Heap (comp) {
    /* PRIVATE data ... (not using "this") */
    var data = new Array();
    var compare = comp;
    

    /* PRIVATE methods */
    function lt(a, b) { /* a < b */
	return compare(a, b) < 0;
    }
    function le(a, b) { /* a <= b */
	var c = compare(a, b);
	return c <= 0;
    }

    function bubbleDown () {
	var i = 0;
	while (true) {
	    var el = data[i];
	    if (el == undefined) return;

	    var li = 2*i + 1; // left child index
	    var ri = 2*i + 2; // right child index
	    
	    var lc = data[li];
	    var rc = data[ri];

	    if (rc === undefined && lc === undefined) {
		return; // at bottom
	    }
	    else if (rc == undefined) { // at bottom too
		if (lt(lc, el)) {
		    swap(li, i);
		    return;
		} else 
		    return;
	    } else if (le(lc, rc)) { // includes equal case
		if (lt(lc, el)) { 
		    swap(li, i);
		    i = li; // not necessarily at bottom
		} else 
		    return;
	    } else if (lt(rc, lc)) {
		if (lt(rc, el)) { 
		    swap(ri, i);
		    i = ri; // not necessarily at bottom
		} else 
		    return;
	    } else 
		return; // element should not be swapped
	}
    }
    function bubbleUp () {
	var i = data.length - 1;
	
	while (true) {
	    var el = data[i];

	    if (i <= 0) return;

	    // parent index
	    var pin = Math.floor( (i - 1) / 2 );

	    var parent = data[pin];
	    if (lt(el, parent)) {
		swap(i, pin);
		i = pin;
	    } else return;
	}
	
    }
    function swap(i,j) {
	var temp = data[i];
	data[i] = data[j];
	data[j] = temp;
    }
    
    /* PUBLIC methods */
    return {
	add: function (x) {
	    if (x === undefined || x == null)
		throw new Error('illegal argument. not allowed to add undefined');
	    
	    // if (compare(x,x) != 0) 
	    //    throw new Error('object must be compatible with compare function');
	    data.push(x);
	    bubbleUp();
	},
	pop: function () {
	    if (! this.any()) 
		throw new Error('heap already empty');
	    var element = data.pop();
	    if (! this.any()) return element;

	    var top = data[0];
	    data[0] = element;
	    bubbleDown();
	    return top;
	    
	},
	any: function () {
	    return data.length > 0;
	}
    };
}

module.exports = Heap;
