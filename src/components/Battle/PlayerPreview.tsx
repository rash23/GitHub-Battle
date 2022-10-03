import { FC } from 'react'
import { PlayerPreviewProps } from './types'

const PlayerPreview: FC<PlayerPreviewProps> = (props: PlayerPreviewProps): JSX.Element => {
	return (
		<div>
			<div className="column">
				<img className="avatar" src={props.avatar} alt="avatar" />
				<h2 className="username">{props.username}</h2>
			</div>
			{props.children}
		</div>
	)
}

export default PlayerPreview
