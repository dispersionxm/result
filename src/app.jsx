import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, NotFound, Task, TodoNotExist } from './components'

export const App = () => {
	const [refreshProducts, setRefreshProducts] = useState(false)
	const [activeModalId, setActiveModalId] = useState(null)

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							refreshProducts={refreshProducts}
							setRefreshProducts={setRefreshProducts}
							activeModalId={activeModalId}
							setActiveModalId={setActiveModalId}
						/>
					}
				/>
				<Route
					path="/task/:id"
					element={
						<Task
							refreshProducts={refreshProducts}
							setRefreshProducts={setRefreshProducts}
							activeModalId={activeModalId}
							setActiveModalId={setActiveModalId}
						/>
					}
				/>
				<Route path="/todo-not-exist" element={<TodoNotExist />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	)
}
