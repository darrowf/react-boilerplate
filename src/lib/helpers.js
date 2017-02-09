const _ = require( 'lodash' )


function doesExist( value ) {
	return ( ( _.isUndefined( value ) == false ) && ( _.isNull( value ) == false ) )
}


module.exports = {
	doesExist
}
