import { useSelector } from 'react-redux'
import Loader from '../General/Loader'

const Repos = () => {
	const repos = useSelector((state) => state.popular.repos)
	console.log(repos)
	const loading = useSelector((state) => state.popular.loading)
	return (
		<ul className="popular-list">
			{loading ? (
				<Loader />
			) : (
				repos.map((repo, index) => {
					return (
						<li key={repo.name} className="popular-item">
							<div className="popular-rank">#{index + 1}</div>
							<ul className="space-list-items">
								<li>
									<img className="avatar" src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login} />
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
