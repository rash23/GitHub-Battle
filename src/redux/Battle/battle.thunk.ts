import {
	fetchResultBattleRequest,
	fetchResultBattleSuccess,
	fetchResultBattleFailure,
} from './battle.actions'

import { battle } from '../../utils/api'
import { addDispatch } from 'src/types'
import { BattleProfiles } from './types'

export const fetchResultBattle = (playersArray: string[]) => (dispatch: addDispatch) => {
	dispatch(fetchResultBattleRequest())

	return battle(playersArray)
		.then((data: BattleProfiles[]) => dispatch(fetchResultBattleSuccess(data)))
		.catch((error) => dispatch(fetchResultBattleFailure(error)))
}
