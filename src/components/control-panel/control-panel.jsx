import { Button } from '../button/button.jsx'
import { Search, Sorting } from './components'
import classes from './control-panel.module.css'

export const ControlPanel = ({ onTodoAdd, onSearch, onSorting }) => {
	return (
		<article className={classes.controlPanel}>
			<Search onSearch={onSearch} />
			<Sorting onSorting={onSorting} />

			<Button onClick={onTodoAdd}>✚</Button>
		</article>
	)
}
