const _ = require( 'lodash' )
const expect = require( 'expect' )


function mountPropValidator() {
	return expect.spyOn( console, 'error' )
}


function expectNoPropValidationError( propValidator ) {
	let messages = _.map( propValidator.calls, ( currentCall ) => currentCall.arguments[0] )

	expect( propValidator ).toNotHaveBeenCalled( `react logged error(s): ${messages.join( '\n\n' )}` )
}


function unmountPropValidator( propValidator ) {
	propValidator.restore()
}


module.exports = {
	mountPropValidator,
	expectNoPropValidationError,
	unmountPropValidator
}
