

function Heap (comp) {
    var data = new Array();
    var compare = comp;
    
    function lt(a, b) {
	return compare(a, b) < 0;
    }
    function gt(a, b) {
	return compare(a, b) > 0;
    }
    function bubbleDown () {
	var i = 0;
//	console.log("\nbubble down");
//	console.log(data);
	while (true) {
	    var el = data[i];
	    if (el == undefined) return;

	    var li = 2*i + 1;
	    var ri = 2*i + 2;
	    
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
	    } else if (! gt(lc, rc)) {
		if (lt(lc, el)) { 
		    swap(li, i);
		    i = li;
		} else return;
	    } else if (! gt(rc, lc)) {
		if (lt(rc, el)) { 
		    swap(ri, i);
		    i = ri;
		} else return;
	    } else {
		return; // element should not be swapped
	    }
	  //  console.log(data);
	}
    }
    function bubbleUp () {
	var i = data.length - 1;
	
//	console.log("\nbubble up");
//	console.log(data);
	while (true) {
	    var el = data[i];

	    if (i <= 0) return;

	    var pin = Math.floor( (i - 1) / 2 );

	    var parent = data[pin];
	    if (lt(el, parent)) {
		swap(i, pin);
		i = pin;
	    } else {
		return;
	    }
//	    console.log(data);
	}
	
    }
    function swap(i,j) {
	var temp = data[i];
	data[i] = data[j];
	data[j] = temp;
    }
    
    return {
	add: function (x) {
	    if (x === undefined || x == null) throw new Error('illegal argument. not allowed to add undefined');
	    data.push(x);
	    
	    bubbleUp();
	},
	pop: function () {
	    if (! this.any()) throw new Error('heap already empty');
	    var element = data.pop();
	    if (! this.any()) return element;

	    var top = data[0];
	    data[0] = element;

	    if (this.any()) bubbleDown();
	    return top;
	    
	},
	any: function () {
	    return data.length > 0;
	}
    };
}

module.exports = Heap;
