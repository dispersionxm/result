import { useContext } from 'react'
import { TodoListLayout } from './todoListLayout.jsx'
import { TodoItem } from '../../components'
import { AppContext } from '../../contexts'

export const TodoList = () => {
	const { filteredTodos } = useContext(AppContext)

	return (
		<TodoListLayout>
			{filteredTodos.map(({ id, title }) => (
				<TodoItem title={title} key={id} id={id} />
			))}
		</TodoListLayout>
	)
}
