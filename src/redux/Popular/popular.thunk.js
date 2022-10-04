import { fetchPopularReposRequest, fetchPopularReposSuccess, fetchPopularReposFailure } from './popular.slice'

import { fetchPopularReposHttpRequest } from '../../utils/api'

export const fetchPopularRepos = (language) => (dispatch) => {
	dispatch(fetchPopularReposRequest())

	return fetchPopularReposHttpRequest(language)
		.then((data) => dispatch(fetchPopularReposSuccess(data)))
		.catch((error) => dispatch(fetchPopularReposFailure(error)))
}
