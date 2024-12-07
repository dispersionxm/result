import classes from './todoItem.module.css'
import editIcon from '../icons/edit-icon.svg'
import deleteIcon from '../icons/delete-icon.svg'

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ id, title }) => {
	return (
		<li key={id} className={classes.todoListItem}>
			<div className="todoItemContent">
				<input type={'checkbox'} className={classes.todoItemCheckbox} />
				<span>{title}</span>
			</div>

			<div className={classes.todoItemButtons}>
				<button className={classes.todoItemNavButton}>
					<img src={`${editIcon}`} alt="" title="Редактировать..." />
				</button>
				<button className={classes.todoItemNavButton}>
					<img src={`${deleteIcon}`} alt="" title="Удалить..." />
				</button>
			</div>
		</li>
	)
}
