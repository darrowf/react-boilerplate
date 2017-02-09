const React = require( 'react' )
const Redux = require( 'react-redux' )


class App extends React.Component {
	renderProgress() {
		if ( this.props.apiCallsInFlight.length === 0 ) {
			return ( <div /> )
		}

		return (
			<div className="loader loader--active">
				<div className="loader-circle"></div>
				<div className="loader-line-mask">
					<div className="loader-line"></div>
				</div>
			</div>
		)
	}


	render() {
		return (
			<div>
				{ this.renderProgress() }
				{ this.props.children }
			</div>
		)
	}
}


App.propTypes = {
	children			: React.PropTypes.object.isRequired,
	apiCallsInFlight	: React.PropTypes.array.isRequired
}


function mapStateToProps( state, ownProps ) {
	return {
		apiCallsInFlight: state.apiCallsInFlight
	}
}


module.exports = Redux.connect( mapStateToProps )( App )
