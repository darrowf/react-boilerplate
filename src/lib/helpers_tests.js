const expect = require( 'expect' )

const helpers = require( './helpers' )


describe( 'Helper Functions (src/lib/helpers.js)', () => {
	describe( 'doesExist', () => {
		it( 'returns false if the param is null', () => {
			expect( helpers.doesExist( null ) ).toBe( false )
		} )


		it( 'returns false if the param is undefined', () => {
			expect( helpers.doesExist( undefined ) ).toBe( false )
		} )


		it( 'returns true if the param exists', () => {
			expect( helpers.doesExist( {} ) ).toBe( true )
		} )
	} )
} )
