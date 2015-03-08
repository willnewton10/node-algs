
function combinations (arr) {
    var results = [[]];

    for (var i=0; i<arr.length; i++) {
	var r = results.length; /* in for-loop below, result length changes */
	for (var j=0; j<r; j++) {
	    var combination = merged(results[j], arr[i]);
	    results.push(combination);
	}
    }
    return results;
}

function merged(arr, element) {
    var copied =  arr.map(function (i) { return i; });
    copied.push(element);
    return copied;
}

module.exports = combinations;
