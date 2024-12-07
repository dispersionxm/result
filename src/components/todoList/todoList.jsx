import { TodoListLayout } from './todoListLayout.jsx'
import { TodoItem } from '../../components'

// eslint-disable-next-line react/prop-types
export const TodoList = ({ todos }) => {
	return (
		<TodoListLayout>
			{/* eslint-disable-next-line react/prop-types */}
			{todos.map(({ id, title }) => (
				<TodoItem title={title} key={id} id={id} />
			))}
		</TodoListLayout>
	)
}
