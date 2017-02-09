const _ = require( 'lodash' )
const expect = require( 'expect' )

const initialState = require( './initial_state' )
const ActionTypes = require( '../actions/action_types' )

const apiCallsInFlightReducer = require( './api_calls_in_flight_reducer' )


describe( 'API Calls in Flight Reducer (src/reducers/api_calls_in_flight_tests.js)', () => {
	it( 'should return the initial state when handling with an unknown action', () => {
		let currentState = _.cloneDeep( initialState.apiCallsInFlight )
		let newState = apiCallsInFlightReducer( undefined, {} )

		expect( newState.length ).toBe( currentState.length )
	} )


	it( 'should return an array with an additional object when handling the begin api call action', () => {
		let currentState = _.cloneDeep( initialState.apiCallsInFlight )
		let newState = apiCallsInFlightReducer( currentState, { type: ActionTypes.BEGIN_API_CALL } )

		expect( newState.length ).toBe( currentState.length + 1 )
	} )


	it( 'should return an array with an one less object when handling the end api call action', () => {
		let currentState = _.cloneDeep( initialState.apiCallsInFlight )
		currentState.push( {} )

		let newState = apiCallsInFlightReducer( currentState, { type: ActionTypes.END_API_CALL } )

		expect( newState.length ).toBe( currentState.length - 1 )
	} )
} )
