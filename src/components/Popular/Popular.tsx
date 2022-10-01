import { FC } from 'react'
import SelectedLanguages from './SelectedLanguages'
import Repos from './Repos'

const Popular: FC = (): JSX.Element => {
	return (
		<>
			<SelectedLanguages />
			<Repos />
		</>
	)
}

export default Popular
