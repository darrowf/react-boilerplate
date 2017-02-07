require( 'babel-polyfill' )

const React = require( 'react' )	// eslint-disable-line no-unused-vars

const render = require( 'react-dom' ).render
const Router = require( 'react-router' ).Router
const browserHistory = require( 'react-router' ).browserHistory

require( '../node_modules/bootstrap/dist/css/bootstrap.min.css' )

const routes = require( './routes' )


render (
	<Router history={ browserHistory } routes={ routes } />,
	document.getElementById( 'app' )
)
