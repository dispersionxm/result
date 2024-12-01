import { useState } from 'react'
import {
	useRequestGetProducts,
	useRequestAddVacuumCleaner,
	useRequestDeleteCar,
	useRequestUpdateLaptop
} from './hooks'
import classes from './app.module.css'

export const App = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)

	const refreshProducts = () => setRefreshProductsFlag(prev => !prev)

	const { products, isLoading } = useRequestGetProducts()

	const { isCreating, requestAddVacuumCleaner } =
		useRequestAddVacuumCleaner(refreshProducts)

	const { isUpdating, requestUpdateLaptop } =
		useRequestUpdateLaptop(refreshProducts)

	const { isDeleting, requestDeleteCar } = useRequestDeleteCar(refreshProducts)

	return (
		<div className={classes.app}>
			{isLoading ? (
				<div className={classes.loader}></div>
			) : (
				Object.entries(products).map(([id, { name, price }]) => (
					<div key={id}>
						{name} - {price} rub
					</div>
				))
			)}

			<button onClick={requestAddVacuumCleaner} disabled={isCreating}>
				Add vacuum cleaner
			</button>
			<button onClick={requestUpdateLaptop} disabled={isUpdating}>
				Update Laptop
			</button>
			<button onClick={requestDeleteCar} disabled={isDeleting}>
				Delete Car
			</button>
		</div>
	)
}
