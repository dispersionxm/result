import { connect /*useSelector*/ } from 'react-redux'
// import { selectAge, selectName } from '../../selectors'

export const UserContainer = ({ name, age }) => {
	// const name = useSelector(selectName)
	// const age = useSelector(selectAge)

	return (
		<article>
			<section>Пользователь:</section>
			<section>Имя: {name}</section>
			<section>Возраст: {age}</section>
		</article>
	)
}

const mapStateToProps = state => ({
	name: state.userState.name,
	age: state.userState.age,
})

export const User = connect(mapStateToProps)(UserContainer)
