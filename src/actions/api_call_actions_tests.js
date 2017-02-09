const nock = require( 'nock' )
const expect = require( 'expect' )
const request = require( 'superagent' )

const thunk = require( 'redux-thunk' ).default
const configureMockStore = require( 'redux-mock-store' ).default

const ActionTypes = require( './action_types' )
const ApiCallActions = require( './api_call_actions' )


describe( 'API Call Actions (src/actions/api_call_actions_tests.js)', () => {
	const middleware = [ thunk ]
	const mockStore = configureMockStore( middleware )


	describe( 'callApi', () => {
		beforeEach( () => {
			nock( 'http://foo.com/' )
				.get( '/bar' )
				.reply( 200, { body: {} } )
		} )


		afterEach( () => {
			nock.cleanAll()
		} )


		it( 'invokes begin and end api actions when an api call succeeds', () => {
			let spoofApi = () => {
				return new Promise( ( resolve, reject ) => {
					request.get( 'http://foo.com/bar' )
						.end( ( err, res ) => {
							resolve()
						} )
				} )
			}

			let store = mockStore( {} )

			let expectedActions = [
				{ type: ActionTypes.BEGIN_API_CALL },
				{ type: ActionTypes.END_API_CALL }
			]

			return store
				.dispatch( ApiCallActions.callApi( spoofApi ) )
				.then( () => { // return of async actions
					expect( store.getActions() ).toEqual( expectedActions )
				} )
		} )


		it( 'invokes begin and end api actions when an api call fails', () => {
			let spoofApi = () => {
				return new Promise( ( resolve, reject ) => {
					request.get( 'http://foo.com/bar' )
						.end( ( err, res ) => {
							reject()
						} )
				} )
			}

			let store = mockStore( {} )

			let expectedActions = [
				{ type: ActionTypes.BEGIN_API_CALL },
				{ type: ActionTypes.END_API_CALL }
			]

			return store
				.dispatch( ApiCallActions.callApi( spoofApi ) )
				.then( () => { // return of async actions
					expect( store.getActions() ).toEqual( expectedActions )
				} )
		} )
	} )


	describe( 'reportApiError', () => {
		it( 'invokes api call error action when called', () => {
			let apiError = new Error()

			let store = mockStore( {} )

			let expectedActions = [
				{ type: ActionTypes.API_ERROR, apiError: apiError }
			]

			store.dispatch( ApiCallActions.reportApiError( apiError ) )

			expect( store.getActions() ).toEqual( expectedActions )
		} )
	} )


	describe( 'clearApiError', () => {
		it( 'invokes clear api call error action when called', () => {
			let store = mockStore( {} )

			let expectedActions = [
				{ type: ActionTypes.CLEAR_API_ERROR }
			]

			store.dispatch( ApiCallActions.clearApiError() )

			expect( store.getActions() ).toEqual( expectedActions )
		} )
	} )
} )
