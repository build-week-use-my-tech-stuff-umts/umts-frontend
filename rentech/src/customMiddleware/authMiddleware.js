import {types} from '../store/actions/index';




export const authMiddleware = state => next => action => {
	if (action.type === types.LOGIN_SUCCESS) {
		localStorage.setItem('token', JSON.stringify(action.payload.token));
	}
	if (action.type === types.LOGOUT_SUCCESS) {
		localStorage.removeItem('token');
	}

	next(action);
};

