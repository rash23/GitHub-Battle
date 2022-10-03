export interface PlayerProps {
	info: {
		name: string
		location: string
		company: string
		followers: string
		following: string
		public_repos: string
		blog: string
	}
	label: string
	score: number
}

export interface PlayerInputProps {
	id: string
	label: string
	onSubmit: Function
}

export interface PlayerPreviewProps {
	avatar: string
	username: string
	children?: React.ReactNode
}

export interface IProfile {
	[key: string]: number
}
