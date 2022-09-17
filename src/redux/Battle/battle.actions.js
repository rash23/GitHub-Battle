import { UPDATE_INPUT_USER_ONE, UPDATE_INPUT_USER_TWO, ADD_MESSAGES } from './main.constants'
export const setInputValueOne = (payload) => {
	return {
		type: UPDATE_INPUT_USER_ONE,
		payload,
	}
}

export const setInputValueTwo = (payload) => {
	return {
		type: UPDATE_INPUT_USER_TWO,
		payload,
	}
}

export const setMessages = (payload) => {
	return {
		type: ADD_MESSAGES,
		payload,
	}
}
