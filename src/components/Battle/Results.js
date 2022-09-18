import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResultBattle } from '../../redux/Battle/battle.thunk'
import { useLocation } from 'react-router-dom'
import PlayerPreview from './PlayerPreview'
import Player from './Player'
import { Link } from 'react-router-dom'
import {
	setPlayerOneName,
	setPlayerTwoName,
	setPlayerOneImage,
	setPlayerTwoImage,
} from '../../redux/Battle/battle.actions'

const Results = () => {
	const dispatch = useDispatch()
	const playerOneName = useSelector((state) => state.battleReducer.playerOneName)
	const playerTwoName = useSelector((state) => state.battleReducer.playerTwoName)
	const playerOneImage = useSelector((state) => state.battleReducer.playerOneImage)
	const playerTwoImage = useSelector((state) => state.battleReducer.playerTwoImage)
	const winnerScore = useSelector((state) => state.battleReducer.winnerScore)
	const loserScore = useSelector((state) => state.battleReducer.loserScore)
	const infoPlayerOne = useSelector((state) => state.battleReducer.infoPlayerOne)
	const infoPlayerTwo = useSelector((state) => state.battleReducer.infoPlayerTwo)
	const error = useSelector((state) => state.battleReducer.error)

	const location = useLocation()
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search)

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
