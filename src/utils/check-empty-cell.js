import { PLAYER } from '../constants/index.js'

export const checkEmptyCell = field =>
	field.some(cellPlayer => cellPlayer === PLAYER.NOBODY)
