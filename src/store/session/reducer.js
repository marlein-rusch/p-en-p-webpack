import { actionTypes } from './types';

export const initialState = {
    something: 'This is something'
}

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TEST: {
			return {
                ...state,
                something: action.test
			};
        }
        default:
			return state;
    }
}

export default sessionReducer;
