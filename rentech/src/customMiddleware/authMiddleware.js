import types from '../store/actions/index';




export const authMiddleware = state => next => action => {
	if (action.type === types.LOGIN_SUCCESS) {
		localStorage.setItem('TBD', JSON.stringify(action.payload.token));
	}
	if (action.type === types.LOGOUT_SUCCESS) {
		localStorage.removeItem('TBD');
	}

	next(action);
};

//change TBD to id from api for the user