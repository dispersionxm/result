/* eslint-disable react/prop-types */
import { TodoListLayout } from './todoListLayout.jsx'
import { TodoItem } from '../../components'

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
