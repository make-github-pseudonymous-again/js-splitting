
var one, compare, util, operator;

util = require( "util" );

compare = require( "aureooms-js-compare" );

operator = require( "aureooms-js-operator" );

one = function ( f, a ) {

	var b, i, initializer;

	b = array.sorted( f, a );

	deepEqual( b.length, a.length, "length check" );

	initializer = {};

	array.reduce( function ( x, y ) {

		if ( x !== initializer ) {

			ok( f( x, y ) <= 0, util.format( "f( %f, %f ) <= 0", x, y ) );

		}

		ok( operator.contains( a, y ), util.format( "%f in %s", y, JSON.stringify( a ) ) );

		return y;

	}, b, initializer );

};

test( "sorted", function () {

	[compare.increasing, compare.decreasing].forEach( function (f) {

		var a, i, n;

		a = [];

		n = 100;

		i = n;

		while ( i-- ) {
			a.push( Math.random() );
		}

		one( f, a );

	});

});
