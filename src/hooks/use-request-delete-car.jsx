import { useState } from 'react'
import { ref, remove } from 'firebase/database'
import { db } from '../firebase.js'

export const useRequestDeleteCar = refreshProducts => {
	const [isDeleting, setIsDeleting] = useState(false)

	const requestDeleteCar = () => {
		const carDbRef = ref(db, 'products/003')

		remove(carDbRef)
			.then(data => {
				console.log("Car has been deleted, server's answer: ", data)
				refreshProducts()
			})
			.finally(() => setIsDeleting(false))
	}

	return {
		isDeleting,
		requestDeleteCar
	}
}
