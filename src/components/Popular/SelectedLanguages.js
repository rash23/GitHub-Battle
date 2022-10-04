import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setSelectedLanguage } from '../../redux/Popular/popular.slice'
import { fetchPopularRepos } from '../../redux/Popular/popular.thunk'

const languages = ['All', 'Javascript', 'Python', 'Java', 'Ruby', 'Scala']
const SelectedLanguages = memo(
	() => {
		const dispatch = useDispatch()
		const [searchParams, setSearchParams] = useSearchParams()
		const queryParams = searchParams.get('language') || 'all'

		const selectedLanguage = useSelector((state) => state.popular.selectedLanguage)


		useEffect(() => {
			dispatch(fetchPopularRepos(selectedLanguage))
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [selectedLanguage])

		return (
			<ul className="languages">
				{languages.map((language, index) => {
					return (
						<li
							key={index}
							className={language === selectedLanguage || language.toLowerCase() === queryParams ? 'selected' : null}
							onClick={() => {
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
