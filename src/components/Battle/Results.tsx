import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResultBattle } from '../../redux/Battle/battle.thunk'
import { useLocation, Location } from 'react-router-dom'
import PlayerPreview from './PlayerPreview'
import Player from './Player'
import { Link } from 'react-router-dom'
import {
	setPlayerOneName,
	setPlayerTwoName,
	setPlayerOneImage,
	setPlayerTwoImage,
} from '../../redux/Battle/battle.actions'
import { RootState } from 'src/types'
import { FC } from 'react'
import { PlayerPreviewProps } from './types'

const Results: FC<PlayerPreviewProps> = (props): JSX.Element => {
	const dispatch = useDispatch()
	const playerOneName: string = useSelector((state: RootState) => state.battleReducer.playerOneName)
	const playerTwoName: string = useSelector((state: RootState) => state.battleReducer.playerTwoName)
	const playerOneImage: string = useSelector(
		(state: RootState) => state.battleReducer.playerOneImage
	)
	const playerTwoImage: string = useSelector(
		(state: RootState) => state.battleReducer.playerTwoImage
	)
	const winnerScore: string = useSelector((state: RootState) => state.battleReducer.winnerScore)
	const loserScore: string = useSelector((state: RootState) => state.battleReducer.loserScore)
	const infoPlayerOne: string = useSelector((state: RootState) => state.battleReducer.infoPlayerOne)
	const infoPlayerTwo: string = useSelector((state: RootState) => state.battleReducer.infoPlayerTwo)
	const error: string = useSelector((state: RootState) => state.battleReducer.error)

	const location: Location = useLocation()
	useEffect(() => {
		const searchParams: URLSearchParams = new URLSearchParams(location.search)

		dispatch(
			fetchResultBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.search])

	const handleReset = () => {
		dispatch(setPlayerOneName(''))
		dispatch(setPlayerOneImage(''))
		dispatch(setPlayerTwoName(''))
		dispatch(setPlayerTwoImage(''))
	}

	return (
		<>
			{error ? (
				<div>
					<p>{error}</p>
					<Link className="reset" to="/battle">
						Reset
					</Link>
				</div>
			) : (
				<div>
					<div className="row">
						<PlayerPreview username={playerOneName} avatar={playerOneImage}>
							<Player label="Winner" score={winnerScore} info={infoPlayerOne} />
						</PlayerPreview>
						<PlayerPreview username={playerTwoName} avatar={playerTwoImage}>
							<Player label="Loser" score={loserScore} info={infoPlayerTwo} />
						</PlayerPreview>
					</div>
					<Link className="reset" to="/battle" onClick={handleReset}>
						Next game
					</Link>
				</div>
			)}
		</>
	)
}

export default Results
