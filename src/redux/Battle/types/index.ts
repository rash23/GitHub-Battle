export interface BattleStateProps {
	username: string
	playerOneName: string
	playerTwoName: string
	playerOneImage: null | string
	playerTwoImage: null | string
	winnerScore: null | string
	loserScore: null | string
	infoPlayerOne: null | string
	infoPlayerTwo: null | string
	error: null | string
}
export interface BattleProfile {
	[key: string]: string | boolean | null
}

export interface BattleProfiles {
	[key: string]: BattleProfile | number
}
