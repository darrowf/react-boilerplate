const ActionTypes = require( '../actions/action_types' )
const initialState = require( './initial_state' )


module.exports = ( state = initialState.apiError, action ) => {
	switch ( action.type ) {
	case ActionTypes.API_ERROR: {
		return Object.assign( {}, state, { code: action.apiError.code, message: action.apiError.message, details: action.apiError.details, errors: action.apiError.errors, stack: action.apiError.stack } )
	}

	case ActionTypes.CLEAR_API_ERROR:
		return initialState.apiError

	default:
		return state
	}
}
