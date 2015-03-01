

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
	console.log("\nbubble down");
	console.log(data);
	while (true) {
	    var el = data[i];
	    if (el === undefined) return;

	    var li = 2*i + 1;
	    var ri = 2*i + 2;
	    
	    var lc = data[li];
	    var rc = data[ri];

	    if ( (lc === undefined && rc === undefined) || 
		 (!gt(el, lc) && !gt(el, rc)))
	         return;
	    
	    if ( (rc == undefined || !gt(lc, rc))) {
		swap(i, li);
		return;
	    } else {
		swap(i, ri);
	    }
	    i++;
	    console.log(data);
	}
    }
    function bubbleUp () {
	var i = data.length - 1;
	
	console.log("\nbubble up");
	console.log(data);
	while (true) {
	    var el = data[i];
	    
	    var pi = Math.floor( (i - 1) / 2 );

	    if (pi >= i) return;

	    var parent = data[pi];
	    if (lt(el, parent)) {
		swap(i, pi);
	    } else {
		return;
	    }
	    i = pi;
	    console.log(data);
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
	    bubbleDown();
	    return top;
	    
	},
	any: function () {
	    return data.length > 0;
	}
    };
}

module.exports = Heap;
