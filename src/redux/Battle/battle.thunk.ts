import { fetchResultBattleRequest, fetchResultBattleSuccess, fetchResultBattleFailure } from './battle.slice'
import { battle } from '../../utils/api'
import { BattleProfiles } from './types'
import { AppDispatch, AppThunk } from 'src/types'

export const fetchResultBattle: any =
	(playersArray: string[]): AppThunk =>
	(dispatch: AppDispatch): Promise<any> => {
		dispatch(fetchResultBattleRequest())

		return battle(playersArray)
			.then((data: BattleProfiles[]) => dispatch(fetchResultBattleSuccess(data)))
			.catch((error: string) => dispatch(fetchResultBattleFailure(error)))
	}
