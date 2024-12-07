import classes from './navigation.module.css'
import searchIcon from '../icons/search-icon.svg'
import addNoteIcon from '../icons/add-note.svg'

// eslint-disable-next-line react/prop-types
export const NavigationLayout = ({
	inputValue,
	setInputValue,
	setModalActive,
}) => {
	return (
		<nav className={classes.navigation}>
			<div className={classes.searchInputWrapper}>
				<input
					id="search"
					type="search"
					placeholder="Search"
					className={classes.searchInput}
					value={inputValue}
					onChange={event => setInputValue(event.target.value)}
				/>
				<div className={classes.searchIcon}>
					<img alt="Search Icon" src={`${searchIcon}`} />
				</div>
			</div>

			<button
				className={classes.addNoteButton}
				type="click"
				title="Создать заметку..."
				aria-label="Создать заметку"
				onClick={() => setModalActive(true)}
			>
				<img alt="" src={`${addNoteIcon}`} />
			</button>
		</nav>
	)
}
