import { AnyAction } from 'redux'
import {
	UPDATE_LANGUAGE,
	FETCH_POPULAR_REPOS_REQUEST,
	FETCH_POPULAR_REPOS_SUCCESS,
	FETCH_POPULAR_REPOS_FAILURE,
} from './popular.constants'

export const setSelectedLanguage = (payload: string): AnyAction => {
	return {
		type: UPDATE_LANGUAGE,
		payload,
	}
}

export const fetchPopularReposRequest = (): AnyAction => {
	return {
		type: FETCH_POPULAR_REPOS_REQUEST,
	}
}

export const fetchPopularReposSuccess = (payload): AnyAction => {
	return {
		type: FETCH_POPULAR_REPOS_SUCCESS,
		payload,
	}
}

export const fetchPopularReposFailure = (payload: string): AnyAction => {
	return {
		type: FETCH_POPULAR_REPOS_FAILURE,
		payload,
	}
}
