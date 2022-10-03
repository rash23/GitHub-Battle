import {
	fetchPopularReposRequest,
	fetchPopularReposSuccess,
	fetchPopularReposFailure,
} from './popular.actions'

import { fetchPopularReposHttpRequest } from '../../utils/api'
import { addDispatch } from 'src/types'

import { ReposType } from './types'

export const fetchPopularRepos =
	(language: string) =>
	(dispatch: addDispatch): Promise<any> => {
		dispatch(fetchPopularReposRequest())

		return fetchPopularReposHttpRequest(language)
			.then((data: ReposType[]) => dispatch(fetchPopularReposSuccess(data)))
			.catch((error) => dispatch(fetchPopularReposFailure(error)))
	}
