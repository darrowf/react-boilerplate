const _ = require( 'lodash' )

const ActionTypes = require( './action_types' )


function callApi( method, callback = _.noop ) {
	// Wraps a call to an external API, the results of which are for local consumption and -not- stored in redux
	// Used to alert the app when a call begins and ends, and used here as a way of knowing when to show and hide a wait spinner

	// Only requirement here is that <method> returns a Promise when called

	return function( dispatch ) {
		dispatch( { type: ActionTypes.BEGIN_API_CALL } )
		return method()
			.then( ( res ) => {
				dispatch( { type: ActionTypes.END_API_CALL } )
				callback( null, res )
			} )
			.catch( ( err ) => {
				dispatch( { type: ActionTypes.END_API_CALL } )
				callback( err )
			} )
	}
}


function reportApiError( apiError ) {
	// Alert the app that an error was received when invoking an external API; this error is set in the redux store

	return function( dispatch ) {
		return dispatch( { type: ActionTypes.API_ERROR, apiError: apiError } )
	}
}


function clearApiError() {
	// Clear out the current error that is held in the redux store

	return function( dispatch ) {
		return dispatch( { type: ActionTypes.CLEAR_API_ERROR } )
	}
}


module.exports = {
	callApi,
	reportApiError,
	clearApiError
}
