require( 'babel-polyfill' )

const React = require( 'react' )	// eslint-disable-line no-unused-vars
const Redux = require( 'redux' )
const thunk = require( 'redux-thunk' ).default
const reduxImmutableStateInvariant = require( 'redux-immutable-state-invariant' )

const render = require( 'react-dom' ).render
const Provider = require( 'react-redux' ).Provider
const Router = require( 'react-router' ).Router
const browserHistory = require( 'react-router' ).browserHistory

require( '../node_modules/bootstrap/dist/css/bootstrap.min.css' )

require( './styles/progress.css' )

const routes = require( './routes' )

const initialState = require( './reducers/initial_state' )
const rootReducer = require( './reducers/root_reducer' )


function configureStore() {
	let middleware = [ Redux.applyMiddleware( thunk, reduxImmutableStateInvariant() ) ]

	return Redux.createStore(
		rootReducer,
		initialState,
		Redux.compose( ...middleware )
	)
}

render(
	<Provider store={ configureStore() }>
		<Router history={ browserHistory } routes={ routes } />
	</Provider>,
	document.getElementById( 'app' )
)
