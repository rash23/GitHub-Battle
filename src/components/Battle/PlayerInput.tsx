import { FC, FormEvent } from 'react'
import { useState } from 'react'

interface PlayerInputProps {
	id: String
	label: String
	onSubmit: Function
}

const PlayerInput: FC = (props: PlayerInputProps): JSX.Element => {
	const [username, setUsername] = useState('')

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		props.onSubmit(props.id, username)
	}
	return (
		<form className="column" onSubmit={handleSubmit}>
			<label className="header" htmlFor="username">
				{props.label}
			</label>
			<input
				id="username"
				type="text"
				placeholder="Github username"
				autoComplete="off"
				value={username}
				onChange={(event) => setUsername(event.target.value)}
			/>
			<button className="button" type="submit" disabled={!username.length}>
				Submit
			</button>
		</form>
	)
}
export default PlayerInput
