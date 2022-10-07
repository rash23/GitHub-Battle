import { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResultBattle } from '../../redux/Battle/battle.thunk'
import { useLocation, Location, Link } from 'react-router-dom'
import { RootState } from 'src/types'
import { InfoPlayer } from 'src/redux/Battle/types'
import PlayerPreview from './PlayerPreview'
import Player from './Player'
import {
	setPlayerOneName,
	setPlayerTwoName,
	setPlayerOneImage,
	setPlayerTwoImage,
} from '../../redux/Battle/battle.slice'

const Results: FC = (): JSX.Element => {
	const dispatch = useDispatch()

	const playerOneName: string = useSelector((state: RootState): string => state.battle.playerOneName)
	const playerTwoName: string = useSelector((state: RootState): string => state.battle.playerTwoName)
	const playerOneImage: string = useSelector((state: RootState): string => state.battle.playerOneImage)
	const playerTwoImage: string = useSelector((state: RootState): string => state.battle.playerTwoImage)
	const winnerScore: number | null = useSelector((state: RootState): number | null => state.battle.winnerScore)
	const loserScore: number | null = useSelector((state: RootState): number | null => state.battle.loserScore)
	const infoPlayerOne: InfoPlayer | null = useSelector(
		(state: RootState): InfoPlayer | null => state.battle.infoPlayerOne
	)
	const infoPlayerTwo: InfoPlayer | null = useSelector(
		(state: RootState): InfoPlayer | null => state.battle.infoPlayerTwo
	)
	const error: string = useSelector((state: RootState): string => state.battle.error)

	const location: Location = useLocation()

	useEffect(() => {
		const searchParams: URLSearchParams = new URLSearchParams(location.search)
		const one: string | null = searchParams.get('playerOneName')
		const two: string | null = searchParams.get('playerTwoName')

		if (one && two) {
			const arr: string[] = [one, two]
			dispatch(fetchResultBattle(arr))
		}
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
