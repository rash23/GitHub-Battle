import {
	UPDATE_LANGUAGE,
	FETCH_POPULAR_REPOS_REQUEST,
	FETCH_POPULAR_REPOS_SUCCESS,
	FETCH_POPULAR_REPOS_FAILURE,
} from './popular.constants'
import { AnyAction } from 'redux'
import { IPopularState } from './types'

const initialState: IPopularState = {
	selectedLanguage: '',
	loading: false,
	repos: [],
	error: null,
}

export const popularReducer = (
	state: IPopularState = initialState,
	action: AnyAction
): IPopularState => {
	switch (action.type) {
		case UPDATE_LANGUAGE:
			return {
				...state,
				selectedLanguage: action.payload,
			}
		case FETCH_POPULAR_REPOS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}

		case FETCH_POPULAR_REPOS_SUCCESS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			}

		case FETCH_POPULAR_REPOS_FAILURE:
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}
