import PropTypes from 'prop-types'

export const InformationLayout = ({ information }) => (
	<section>{information}</section>
)

InformationLayout.propTypes = {
	information: PropTypes.string,
}
