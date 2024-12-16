/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import classes from './todoItem.module.css'

export const TodoItem = ({ id, title }) => {
	return (
		<Link to={`/task/${id}`} key={id} className={classes.todoListItem}>
			<div className={classes.todoItemContent}>{title}</div>
		</Link>
	)
}
