import { fetchPopularReposRequest, fetchPopularReposSuccess, fetchPopularReposFailure } from './popular.slice'
import { fetchPopularReposHttpRequest } from '../../utils/api'
import { AppDispatch } from 'src/types'

export const fetchPopularRepos: any =
	(language: string) =>
	(dispatch: AppDispatch): Promise<any> => {
		dispatch(fetchPopularReposRequest())

		return fetchPopularReposHttpRequest(language)
			.then((data) => dispatch(fetchPopularReposSuccess(data)))
			.catch((error) => dispatch(fetchPopularReposFailure(error.message)))
	}
