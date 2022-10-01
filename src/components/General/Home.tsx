import { Link } from 'react-router-dom'
import { FC } from 'react'

const Home: FC = (): JSX.Element => {
	return (
		<div className="home-container">
			<h1>Github Battle: Battle your friends and ...stuff</h1>
			<Link className="button" to="/battle">
				Battle
			</Link>
		</div>
	)
}

export default Home
