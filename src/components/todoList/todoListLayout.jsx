import classes from './todoList.module.css'

// eslint-disable-next-line react/prop-types
export const TodoListLayout = ({ children }) => {
	return (
		<div className={classes.todosList}>
			<h2 className={classes.todosListTitle}>Список задач:</h2>
			{children}
		</div>
	)
}
