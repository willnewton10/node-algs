


function mergesort (array, compare) {
    compare = compare || function (a,b) { return a <= b; };
    if (array.length < 2) return array.slice();

    var h = array.length / 2;
    var a1 = mergesort(array.slice(0, h), compare);
    var a2 = mergesort(array.slice(h), compare);
    
    return merge(a1, a2, compare);
};

function merge(a1, a2, compare) {
    var result = [];
    while (a1.length > 0 || a2.length > 0) {	
	if      (a1.length == 0)        result.push(a2.shift());
	else if (a2.length == 0)        result.push(a1.shift());
	else if (compare(a1[0], a2[0])) result.push(a1.shift());
	else                            result.push(a2.shift());
    }
    return result;
}

module.exports = mergesort;
