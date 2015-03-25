
function combinations (arr, size) {

    var results = [[]];

    for (var i=0; i<arr.length; i++) {
	var r = results.length; /* in for-loop below, result length changes */
	for (var j=0; j<r; j++) {

	    if (size === undefined || results[j].length < size ) {
		var combination = merged(results[j], arr[i]);
		results.push(combination);
	    }
	}
    }
    if (size !== undefined) 
	return results.filter(function (r) { return r.length == size; });
    else 
	return results;
}

function merged(arr, element) {
    var copied =  arr.map(function (i) { return i; });
    copied.push(element);
    return copied;
}


module.exports = combinations;
