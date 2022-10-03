import { AnyAction } from 'redux'
import { IProfile } from 'src/components/Battle/types'
import {
	UPDATE_USERNAME,
	UPDATE_PLAYER_ONE_NAME,
	UPDATE_PLAYER_TWO_NAME,
	UPDATE_PLAYER_ONE_IMAGE,
	UPDATE_PLAYER_TWO_IMAGE,
	FETCH_RESULT_BATTLE_REQUEST,
	FETCH_RESULT_BATTLE_SUCCESS,
	FETCH_RESULT_BATTLE_FAILURE,
} from './battle.constants'

export const setUserName = (payload: string | null): AnyAction => {
	return {
		type: UPDATE_USERNAME,
		payload,
	}
}

export const setPlayerOneName = (payload: string | null): AnyAction => {
	return {
		type: UPDATE_PLAYER_ONE_NAME,
		payload,
	}
}

export const setPlayerTwoName = (payload: string | null): AnyAction => {
	return {
		type: UPDATE_PLAYER_TWO_NAME,
		payload,
	}
}

export const setPlayerOneImage = (payload: string | null): AnyAction => {
	return {
		type: UPDATE_PLAYER_ONE_IMAGE,
		payload,
	}
}

export const setPlayerTwoImage = (payload: string | null): AnyAction => {
	return {
		type: UPDATE_PLAYER_TWO_IMAGE,
		payload,
	}
}

export const fetchResultBattleRequest = (): AnyAction => {
	return {
		type: FETCH_RESULT_BATTLE_REQUEST,
	}
}

export const fetchResultBattleSuccess = (payload: string[]) => {
	return {
		type: FETCH_RESULT_BATTLE_SUCCESS,
		payload,
	}
}

export const fetchResultBattleFailure = (payload: string): AnyAction => {
	return {
		type: FETCH_RESULT_BATTLE_FAILURE,
		payload,
	}
}
