export interface ILicense {
	[key: string]: string | null
}

export interface IOwner {
	[key: string]: string | boolean | null
}

export type ReposType = { [key: string]: string | null | boolean | string[] | IOwner | ILicense }

export interface IPopularState {
	selectedLanguage: string
	loading: boolean
	repos: ReposType[]
	error: null | string
}
