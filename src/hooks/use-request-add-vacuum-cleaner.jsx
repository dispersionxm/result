import { useState } from 'react'
import { ref, push } from 'firebase/database'
import { db } from '../firebase.js'

export const useRequestAddVacuumCleaner = () => {
	const [isCreating, setIsCreating] = useState(false)

	const requestAddVacuumCleaner = () => {
		setIsCreating(true)

		const productsDbRef = ref(db, 'products')

		push(productsDbRef, {
			name: 'Vacuum cleaner',
			price: 18000
		})
			.then(data => {
				console.log("Vacuum cleaner has been added, server's answer: ", data)
			})
			.finally(() => setIsCreating(false))
	}
	return {
		isCreating,
		requestAddVacuumCleaner
	}
}
