import { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../firebase.js'

export const useRequestUpdateLaptop = () => {
	const [isUpdating, setIsUpdating] = useState(false)

	const requestUpdateLaptop = () => {
		const laptopDbRef = ref(db, 'products/002')

		set(laptopDbRef, {
			name: 'Laptop',
			price: 169000
		}).then(data => {
			console.log("Laptop has been updated, server's answer: ", data)
		})
	}

	return {
		isUpdating,
		requestUpdateLaptop
	}
}
