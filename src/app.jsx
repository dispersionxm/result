import { HomePage, NotFound } from './components'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	)
}
