import { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase.js'

export const useRequestGetProducts = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const productsDbRef = ref(db, 'products')

		const unsubscribe = onValue(productsDbRef, snapshot => {
			const loadedProducts = snapshot.val() || {}

			setProducts(loadedProducts)
			setIsLoading(false)
		})

		return unsubscribe
	}, [])

	return {
		products,
		isLoading
	}
}
