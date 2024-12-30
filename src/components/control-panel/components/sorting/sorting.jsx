import { useState } from 'react'
import { Button } from '../../../button/button.jsx'
import classes from './sorting.module.css'

export const Sorting = ({ onSorting }) => {
	const [isEnabled, setIsEnabled] = useState(false)

	const onChange = ({ target }) => {
		setIsEnabled(target.checked)
		onSorting(target.checked)
	}

	return (
		<Button>
			<input
				className={classes.checkbox}
				type="checkbox"
				id="sorting-button"
				checked={isEnabled}
				onChange={onChange}
			/>

			<label className={classes.label} htmlFor="sorting-button">
				A&darr;
			</label>
		</Button>
	)
}
