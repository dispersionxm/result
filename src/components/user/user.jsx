import { useSelector } from 'react-redux'
import { selectAge, selectName } from '../../selectors'
export const User = () => {
	// const { name, age } = store.getState()

	const name = useSelector(selectName)
	const age = useSelector(selectAge)

	return (
		<article>
			<section>Пользователь:</section>
			<section>Имя: {name}</section>
			<section>Возраст: {age}</section>
		</article>
	)
}
