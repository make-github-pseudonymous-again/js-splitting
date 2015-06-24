
var one;

one = function ( start, stop, step ) {

	var iterable;

	iterable = array.range( 0, stop, 1, [] );

	deepEqual(
		array.islice( iterable, start, stop, step, [] ),
		array.range( start, stop, step, [] ),
		JSON.stringify( [start, stop, step] )
	);

};



test( "islice", function () {

	one( 0, 0, 1 );
	one( 0, 100, 1 );
	one( 0, 100, 2 );
	one( 0, 100, 3 );
	one( 50, 100, 1 );
	one( 50, 100, 2 );
	one( 50, 100, 3 );

});
