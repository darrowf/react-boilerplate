const React = require( 'react' )
const Redux = require( 'react-redux' )

const Api = require( '../lib/api' )
const ApiActions = require( '../actions/api_call_actions' )

const Button = require( 'react-bootstrap' ).Button


class HelloWorld extends React.Component {
	handleCallApi() {
		this.props.dispatch(
			ApiActions.callApi(
				() => {
					return ( () => {
						return Api.fakeCall()
					} )()
				},
				( err, res ) => {}
			)
		)
	}


	render() {
		return (
			<div>
				<Button bsStyle="primary" onClick={ this.handleCallApi.bind( this ) }>Call API</Button>
			</div>
		)
	}
}


module.exports = {
	component	: HelloWorld,
	redux		: Redux.connect()( HelloWorld )
}
