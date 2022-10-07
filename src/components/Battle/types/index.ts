import { InfoPlayer } from 'src/redux/Battle/types'

export interface PlayerProps {
	info: InfoPlayer | null
	label: string | null
	score: number | null
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
