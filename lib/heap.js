
/* Heap constructor requires a COMPARE function with params A and B
   
   if A == B, it should return 0
   if A < B, it should return a number n < 0
   IF a > b, it should return a number n > 0

   Heap has 3 public methods:

   1. add(element) : void
      -> adds element to the heap
      -> element CANNOT be undefined or null
      -> element must comply with compare function

   2. pop() : element
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
		} else return;
	    } else if (le(lc, rc)) {
		if (lt(lc, el)) { 
		    swap(li, i);
		    i = li; // not necessarily at bottom
		} else return;
	    } else if (le(rc, lc)) {
		if (lt(rc, el)) { 
		    swap(ri, i);
		    i = ri; // not necessarily at bottom
		} else return;
	    } else {
		return; // element should not be swapped
	    }
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
