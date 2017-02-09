const Redux = require( 'redux' )
const thunk = require( 'redux-thunk' ).default
const reduxImmutableStateInvariant = require( 'redux-immutable-state-invariant' )

const rootReducer = require( './reducers/root_reducer' )


module.exports = ( initialState ) => {
	let middleware = [ Redux.applyMiddleware( thunk, reduxImmutableStateInvariant() ) ]

	return Redux.createStore (
		rootReducer,
		initialState,
		Redux.compose( ...middleware )
	)
}
