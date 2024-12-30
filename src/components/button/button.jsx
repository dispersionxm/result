import classes from './button.module.css'

export const Button = ({ onClick, children }) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{children}
		</button>
	)
}
