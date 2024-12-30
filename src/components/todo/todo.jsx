import { Button } from '../button/button.jsx'
import classes from './todo.module.css'

export const Todo = ({
	title,
	completed,
	isEditing,
	onEdit,
	onTodoCompletedChange,
	onTitleChange,
	onSave,
	onRemove,
}) => {
	return (
		<div className={classes.todo}>
			<input
				type="checkbox"
				className={classes.checkbox}
				checked={completed}
				onChange={({ target }) => onTodoCompletedChange(target.checked)}
			/>
			<div className={classes.title}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onTitleChange(target.value)}
					/>
				) : (
					<div onClick={onEdit} className={classes.titleValue}>
						{title}
					</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>✎</Button>
				) : (
					<Button onClick={onRemove}>✖</Button>
				)}
			</div>
		</div>
	)
}
