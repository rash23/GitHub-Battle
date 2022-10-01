import {
	fetchPopularReposRequest,
	fetchPopularReposSuccess,
	fetchPopularReposFailure,
} from './popular.actions'

import { fetchPopularReposHttpRequest } from '../../utils/api'
import { addDispatch } from 'src/types'
import { AnyAction } from 'redux'

export const fetchPopularRepos =
	(language: string) =>
	(dispatch: addDispatch): Promise<AnyAction> => {
		dispatch(fetchPopularReposRequest())

		return fetchPopularReposHttpRequest(language)
			.then((data) => dispatch(fetchPopularReposSuccess(data)))
			.catch((error) => dispatch(fetchPopularReposFailure(error)))
	}
