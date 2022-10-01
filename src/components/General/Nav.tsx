import { NavLink } from 'react-router-dom'
import { FC } from 'react'

const Nav: FC = (): JSX.Element => {
	const navLinks: string[] = ['Home', 'Popular', 'Battle']

	return (
		<nav>
			<ul className="nav">
				{navLinks.map(
					(link: string, index: number): JSX.Element => (
						<li key={index}>
							<NavLink to={link === 'Home' ? '/' : link.toLowerCase()}>{link}</NavLink>
						</li>
					)
				)}
			</ul>
		</nav>
	)
}

export default Nav
