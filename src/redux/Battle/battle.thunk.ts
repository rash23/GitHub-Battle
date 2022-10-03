import {
	fetchResultBattleRequest,
	fetchResultBattleSuccess,
	fetchResultBattleFailure,
} from './battle.actions'

import { battle } from '../../utils/api'
import { addDispatch } from 'src/types'
import { IProfile } from 'src/components/Battle/types'

export const fetchResultBattle = (playersArray: string[]) => (dispatch: addDispatch) => {
	dispatch(fetchResultBattleRequest())

	return battle(playersArray)
		.then((data: IProfile[]) => dispatch(fetchResultBattleSuccess(data)))
		.catch((error) => dispatch(fetchResultBattleFailure(error)))
}
