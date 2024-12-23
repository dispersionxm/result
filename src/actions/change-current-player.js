export const CHANGE_CURRENT_PLAYER = 'CHANGE_CURRENT_PLAYER'

export const changeCurrentPlayer = nextPlayer => ({
	type: CHANGE_CURRENT_PLAYER,
	payload: nextPlayer,
})
