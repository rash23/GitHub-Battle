import { memo, useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setSelectedLanguage } from '../../redux/Popular/popular.actions'
import { fetchPopularRepos } from '../../redux/Popular/popular.thunk'
import { RootState } from 'src/types'

const languages = ['All', 'Javascript', 'Python', 'Java', 'Ruby', 'Scala']
const SelectedLanguages: FC = memo(
	(): JSX.Element => {
		const dispatch = useDispatch()
		const [searchParams, setSearchParams] = useSearchParams()
		const queryParams: string = searchParams.get('language') || 'all'

		const selectedLanguage: string = useSelector(
			(state: RootState) => state.popularReducer.selectedLanguage
		)

		useEffect(() => {
			dispatch(fetchPopularRepos(selectedLanguage))
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [selectedLanguage])

		return (
			<ul className="languages">
				{languages.map((language: string, index: number): JSX.Element => {
					return (
						<li
							key={index}
							className={
								language === selectedLanguage || language.toLowerCase() === queryParams
									? 'selected'
									: ''
							}
							onClick={(): void => {
								setSearchParams({ language: language.toLowerCase() })
								dispatch(setSelectedLanguage(language))
							}}
						>
							{language}
						</li>
					)
				})}
			</ul>
		)
	},
	(prevProps, nextProps) => {
		return prevProps.selectedLanguage === nextProps.selectedLanguage
	}
)
export default SelectedLanguages
