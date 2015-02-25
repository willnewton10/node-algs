
var quicksort = function (arr) {
    qs_inner(arr, 0, arr.length - 1);
    return arr;
};

function qs_inner (arr, l, r) {
    var m = partition(arr, l, r);

    if (l + 1 < m) qs_inner(arr, l, m);
    if (r - 1 > m) qs_inner(arr, l, m);
}
function swap (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition (arr, l, r) {
    var i = Math.floor( (l+r)/2 );

    var el = arr[i];

    while (l < r) {
	
	var _l;
	var _r;

	while ((_l = arr[l]) < el) l++;
	while ((_r = arr[r]) > el) r--;

	swap(arr, l, r);
	l++;
	r--;
    }
}

module.exports = quicksort;


