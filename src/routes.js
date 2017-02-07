const React = require( 'react' )	// eslint-disable-line no-unused-vars
const Router = require( 'react-router' )

const App = require( './components/app' )

const HelloWorld = require( './components/hello_world' )


module.exports = (
	<Router.Route path="/" component={ App } >
		<Router.IndexRoute component={ HelloWorld } />
	</Router.Route>
)
