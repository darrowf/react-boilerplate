const React = require( 'react' )	// eslint-disable-line no-unused-vars

const expect = require( 'expect' )
const Enzyme = require( 'enzyme' )

const TestHelpers = require( '../../test/helpers' )

const HelloWorld = require( './hello_world' )


describe( '<HelloWorld (/src/components/hello_world_tests.js)', () => {
	let defaultProps
	let propValidator


	beforeEach( () => {
		defaultProps = {}

		propValidator = TestHelpers.mountPropValidator()
	} )


	afterEach( () => {
		TestHelpers.unmountPropValidator( propValidator )
	} )


	it( 'mounts', ( done ) => {
		let component = Enzyme.shallow( <HelloWorld { ...defaultProps } /> )

		TestHelpers.expectNoPropValidationError( propValidator )
		expect( component.length ).toBe( 1 )

		done()
	} )
} )
