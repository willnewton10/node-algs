

/* Generate all permutations of the elements of some Array.
   Returns an array of arrays.

   Note: this method treats the input array as consisting of distinct values.
         In other words, if input has duplicate elements, then 
         output will have duplicate permutations.
*/
function permutations (array) {
    var arr = array.map(function (i) { return i; });
    var results = [];
    perm(arr, arr.length, results);
    return results;
}

function perm(arr, n, aggr) {
    if (n == 1) {
	aggr.push(copy(arr));
	return;
    }
    for (var i=0; i<n; i++) {
	swap(arr, i, n-1);
	perm(arr, n-1, aggr);
	swap(arr, i, n-1);
    }
}   

function copy(arr) { 
    return arr.map(function (i) { return i; });
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = permutations;
