const ActionTypes = require( '../actions/action_types' )
const initialState = require( './initial_state' )


module.exports = ( state = initialState.apiCallsInFlight, action ) => {
	switch ( action.type ) {
	case ActionTypes.BEGIN_API_CALL: {
		return [ ...state, {} ]
	}

	case ActionTypes.END_API_CALL: {
		let newState = [ ...state ]
		newState.pop()

		return newState
	}

	default:
		return state
	}
}
