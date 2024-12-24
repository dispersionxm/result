const fetchUserDataMock = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				name: 'VASILIY',
				age: 42,
			})
		}, 500)
	})
}

export const changeUser = () => dispatch =>
	fetchUserDataMock().then(userData =>
		dispatch({
			type: 'CHANGE_USER',
			payload: userData,
		}),
	)
