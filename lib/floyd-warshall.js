

/* returns an object with 2 properties:

       distances - a 2*2 matrix of all pairs shortest distances
          cell [i][j] is distance from node i to node j 

       predecessors - a 2*2 matrix of predecessors
          cell [i][j] is the node on path from i to j before reaching j
*/
           
function floydWarshall (graphMatrix) {
    /* graphMatrix is 2-d array, where a[j][k] is the distance from 
       node j to node k. Non-edges should be Infinity. */

    var M = copy(graphMatrix);

    var predecessors = M.map(function (a, x) {
	return a.map(function (b, y) {
	    return b == 0 || b == Infinity 
		? null
		: x;
	});
    });

    /* number of nodes (matrix is always square) */
    var r = M.length;

    for (var i=0; i<r; i++) {          /* try adding node i to all paths */
	for (var j=0; j<r; j++) {      /* (paths from j...               */
	    for (var k=0; k<r; k++) {  /*              ... to k */
		
		var contender = M[j][i] + M[i][k];   /* make new path */
		var current = M[j][k];       /* get old one */
		if (contender < current) {   /* if new one is better */
		    M[j][k] = contender;     /* replace old with new */
		    predecessors[j][k] = i;
		}
	    }
	}
    }

    return { 
	distances: M,  
	predecessors: predecessors,
	getPath: function (a, b) {
	    var path = [b];
	    while (b != a) {
		var c = predecessors[a][b];
		path.push(c);
		b = c;
	    }
	    return path.reverse();
	}
    };
}

/* copy the matrix, and optionally include a replace function
   to map the value when copying */
function copy(matrix, mapper) {
    return matrix.map(function (row) {
	return row.map(function (col) {
	    return col;
	});
    });
}

module.exports = floydWarshall;
