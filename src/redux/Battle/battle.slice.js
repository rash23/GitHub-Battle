import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	username: '',
	playerOneName: '',
	playerTwoName: '',
	playerOneImage: null,
	playerTwoImage: null,
	winnerScore: null,
	loserScore: null,
	infoPlayerOne: null,
	infoPlayerTwo: null,
	error: null,
}

export const battleSlice = createSlice({
	name: 'battle',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.playerOneName = action.payload
		},
		setPlayerOneName: (state, action) => {
			state.playerOneName = action.payload
		},
		setPlayerTwoName: (state, action) => {
			state.playerTwoName = action.payload
		},
		setPlayerOneImage: (state, action) => {
			state.playerOneImage = action.payload
		},
		setPlayerTwoImage: (state, action) => {
			state.playerTwoImage = action.payload
		},

		fetchResultBattleRequest: (state) => {
			state.error = null
		},
		fetchResultBattleSuccess: (state, action) => {
				state.error = ''
				state.playerOneName = action.payload[0].profile.login
				state.playerTwoName = action.payload[1].profile.login
				state.playerOneImage = action.payload[0].profile.avatar_url
				state.playerTwoImage = action.payload[1].profile.avatar_url
				state.winnerScore = action.payload[0].score
				state.loserScore = action.payload[1].score
				state.infoPlayerOne = action.payload[0].profile
				state.infoPlayerTwo = action.payload[1].profile
		},
		fetchResultBattleFailure: (state, action) => {
			state.error = action.payload
		},
	},
})

export const {
	setUsername,
	setPlayerOneName,
	setPlayerTwoName,
	setPlayerOneImage,
	setPlayerTwoImage,
	fetchResultBattleRequest,
	fetchResultBattleSuccess,
	fetchResultBattleFailure,
} = battleSlice.actions

export default battleSlice.reducer
