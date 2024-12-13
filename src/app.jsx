/* eslint-disable react/prop-types */
import {
	Routes,
	Route,
	NavLink,
	Outlet,
	useParams,
	useNavigate,
	useRoutes
} from 'react-router-dom'
import classes from './app.module.css'
import { useEffect, useState } from 'react'

const database = {
	productList: [
		{ id: 1, name: 'TV' },
		{ id: 2, name: 'Laptop' },
		{ id: 3, name: 'phone' }
	],
	products: {
		1: { id: 1, name: 'TV', price: 29900, amount: 15 },
		2: { id: 2, name: 'Laptop', price: 18400, amount: 18 },
		3: { id: 3, name: 'phone', price: 13900, amount: 42 }
	}
}

const LOADING_TIMEOUT = 3000

const fetchProductList = () => database.productList
const fetchProduct = id => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(database.products[id])
		}, 2000)
	})
}

const MainPage = () => {
	return <div>Main page contents</div>
}

const Catalog = () => {
	return (
		<div>
			<h3>Products Catalog</h3>

			<ul>
				{fetchProductList().map(({ id, name }) => (
					<li key={id}>
						<NavLink to={`product/${id}`}>{name}</NavLink>
					</li>
				))}
			</ul>

			<Outlet />
		</div>
	)
}

const ProductNotFound = () => <div>Tакой товар не существует</div>

const ProductLoadError = () => (
	<div>Oшибка загрузки товара, Попробуйте ещё раз позже</div>
)

const Product = () => {
	const [product, setProduct] = useState(null)

	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		let isLoadingTimeout = false
		let isProductLoaded = false

		setTimeout(() => {
			isLoadingTimeout = true

			if (!isProductLoaded) {
				navigate('/product-loaded-error', { replace: true })
			}
		}, LOADING_TIMEOUT)

		fetchProduct(params.id).then(loadedProduct => {
			isProductLoaded = true

			if (!isLoadingTimeout) {
				if (!loadedProduct) {
					navigate('/product-not-exist')
					return
				}

				setProduct(loadedProduct)
			}
		})
	}, [params.id, navigate])

	if (!product) {
		return null
	}

	const { name, price, amount } = product

	return (
		<div>
			<h3>{name}</h3>
			<div>Price - {price}</div>
			<div>Amount - {amount}</div>
			<NavLink to='inner'>About</NavLink>

			<Outlet />
		</div>
	)
}

const Contacts = () => {
	return <div>Contacts page contents</div>
}

const NotFound = () => <div>Tакая страница не существует</div>

const ExtentedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span>{children}</span>
					<span>*</span>
				</>
			) : (
				<span>{children}</span>
			)
		}
	</NavLink>
)

export const App = () => {
	const routes = useRoutes([
		{ path: '/', element: <MainPage /> },
		{
			path: '/catalog',
			element: <Catalog />,
			children: [
				{ path: 'product/:id', element: <Product /> },
				{ path: 'product/:service', element: <Product /> }
			]
		}
	])

	return (
		<div className={classes.app}>
			<div>
				<h3>Menu</h3>
				<ul>
					<li>
						<ExtentedLink to='/'>Home</ExtentedLink>
					</li>
					<li>
						<ExtentedLink to='/catalog'>Catalog</ExtentedLink>
					</li>
					<li>
						<ExtentedLink to='/contacts'>Contacts</ExtentedLink>
					</li>
				</ul>
			</div>

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/catalog' element={<Catalog />}>
					<Route path='product/:id' element={<Product />} />
					<Route path='service/:id' element={<Product />} />
				</Route>
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/product-loaded-error' element={<ProductLoadError />} />
				<Route path='/product-not-exist' element={<ProductNotFound />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			{routes}
		</div>
	)
}
