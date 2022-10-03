import { useSelector } from 'react-redux'
import { FC } from 'react'
import Loader from '../General/Loader'
import { RootState } from 'src/types'
import { ReposType } from 'src/redux/Popular/types'

const Repos: FC = (): JSX.Element => {
	const repos: ReposType[] = useSelector(
		(state: RootState): ReposType[] => state.popularReducer.repos
	)
	const loading = useSelector((state: RootState) => state.popularReducer.loading)
	return (
		<ul className="popular-list">
			{loading ? (
				<Loader />
			) : (
				repos.map((repo: ReposType, index: number): JSX.Element => {
					return (
						<li key={repo.name} className="popular-item">
							<div className="popular-rank">#{index + 1}</div>
							<ul className="space-list-items">
								<li>
									<img
										className="avatar"
										src={repo.owner.avatar_url}
										alt={'Avatar for ' + repo.owner.login}
									/>
								</li>
								<li>
									<a href={repo.html_url}>{repo.name}</a>
								</li>
								<li>@{repo.owner.login}</li>
								<li>{repo.stargazers_count} stars</li>
							</ul>
						</li>
					)
				})
			)}
		</ul>
	)
}

export default Repos
