const redux = require( 'redux' )
const routerReducer = require( 'react-router-redux' ).routerReducer

const apiErrorReducer = require( './api_error_reducer' )
const apiCallsInFlightReducer = require( './api_calls_in_flight_reducer' )


module.exports = redux.combineReducers( {
	routing				: routerReducer,
	apiCallsInFlight	: apiCallsInFlightReducer,
	apiError			: apiErrorReducer
} )
