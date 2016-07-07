import Constants from '../constants';

const initialState = {
	errors: null
};

export default function reducer(state = initialState, action = {}){
	switch(action, type) {
		case Constants.REGISTRATION_ERRORS:
			return { ...state, errors: action.errors };

		default:
			return state;
	}
}