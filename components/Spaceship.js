import React from 'react'

class Spaceship extends React.Component {
	render (){
		return (
			<div className="Spaceship">
				<p>{this.props.name}</p>
				<p>{this.props.speed}</p>
				<p>{this.props.hasRockets}</p>
				<p>{this.props.colors}</p>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black', 'red']
}

module.exports = Spaceship

