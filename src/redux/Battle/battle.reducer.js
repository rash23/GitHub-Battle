import { UPDATE_INPUT_USER_ONE, UPDATE_INPUT_USER_TWO, ADD_MESSAGES } from './main.constants'

const initialState = {
	inputValueOne: {
		value: '',
		user: '',
	},

	inputValueTwo: {
		value: '',
		user: 'two',
	},

	messages: [],
}

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_INPUT_USER_ONE:
			return {
				...state,
				inputValueOne: {
					value: action.payload,
					user: 'one',
				},
			}
		case UPDATE_INPUT_USER_TWO:
			return {
				...state,
				inputValueTwo: {
					value: action.payload,
					user: 'two',
				},
			}

		case ADD_MESSAGES:
			return {
				...state,
				messages: [...state.messages, action.payload],
			}
		default:
			return state
	}
}
