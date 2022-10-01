export interface IPopularState {
	selectedLanguage: string
	loading: boolean
	repos: { [key: string]: any }
	error: null | string
}
