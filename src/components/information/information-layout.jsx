import { Component } from 'react'
import PropTypes from 'prop-types'

export class InformationLayout extends Component {
	render() {
		return <section className={'mb-5'}>{this.props.information}</section>
	}
}

InformationLayout.propTypes = {
	information: PropTypes.string,
}
