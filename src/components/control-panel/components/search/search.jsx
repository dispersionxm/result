import { useState, useRef } from 'react'
import { debounce } from './utils'
import classes from './search.module.css'

export const Search = ({ onSearch }) => {
	const [value, setValue] = useState('')

	const debouncedOnSearch = useRef(debounce(onSearch, 1500)).current

	const onSubmit = event => {
		event.preventDefault()
		onSearch(value)
	}

	const onChange = ({ target }) => {
		setValue(target.value)
		debouncedOnSearch(target.value)
	}

	return (
		<form className={classes.search} onSubmit={onSubmit}>
			<input
				className={classes.input}
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Поиск..."
			/>
		</form>
	)
}
