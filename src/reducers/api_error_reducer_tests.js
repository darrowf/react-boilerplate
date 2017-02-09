const _ = require( 'lodash' )
const expect = require( 'expect' )

const initialState = require( './initial_state' )
const ActionTypes = require( '../actions/action_types' )

const apiErrorReducer = require( './api_error_reducer' )


describe( 'API Error Reducer (src/reducers/api_error_reducer_tests.js)', () => {
	it( 'should return the initial state when handling with an unknown action', () => {
		let currentState = _.cloneDeep( initialState.apiError )
		let newState = apiErrorReducer( currentState, {} )

		expect( newState ).toBe( currentState )
	} )


	it( 'should return the initial state when handling the clear api error action', () => {
		let currentState = _.cloneDeep( initialState.apiError )
		let newState = apiErrorReducer( currentState, { type: ActionTypes.CLEAR_API_ERROR } )

		expect( newState ).toBe( currentState )
	} )


	it( 'should return a object with the error information when handling the api error action', () => {
		let apiError = new Error( 'foo' )

		let currentState = _.cloneDeep( initialState.apiError )
		let newState = apiErrorReducer( currentState, { type: ActionTypes.API_ERROR, apiError: apiError } )

		expect( newState ).toNotBeA( Error )	// can't clone an Error object, so we just create a POJO instead

		expect( newState.stack ).toBe( apiError.stack )
		expect( newState.message ).toBe( apiError.message )
	} )
} )
