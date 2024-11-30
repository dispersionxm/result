import { useEffect, useState } from 'react'
import classes from './app.module.css'

export const App = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://mocki.io/v1/09a5b348-3658-4582-863d-aae1a08e4147')
			.then(response => response.json())
			.then(loadedProducts => setProducts(loadedProducts))
	}, [])

	console.log(products)

	return (
		<div className={classes.app}>
			{products.map(({ id, name, price }) => (
				<div key={id}>
					{name} - {price} rub
				</div>
			))}
		</div>
	)
}
