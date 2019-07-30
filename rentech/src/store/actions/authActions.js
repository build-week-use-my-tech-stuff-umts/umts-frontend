import {umtsApi} from '../../api/umtsApi'
import { types }from './index'



export const doSignIn = credentials => async dispatch =>{
  dispatch({ type: types.LOGIN_START});

  try {
    const res = await umtsApi.post('/auth/login', credentials);

    dispatch({type: types.LOGIN_SUCCESS, payload: res.data});

  } catch (error) {
    dispatch({type: types.LOGIN_FAIL, payload: error.res.data});
  }
};



export const doCreateAccount = newUserDetails => async dispatch =>{
  dispatch({ type: types.CREATE_USER_START});

  try {
    const res = await umtsApi.post('/auth/register', newUserDetails);

    dispatch({type: types.CREATE_USER_SUCCESS, payload: {message: 'User was created successfully!'} });

  } catch (error) {
    dispatch({type: types.CREATE_USER_FAIL, payload: error.res.data});
  }
};



export const doSignOut = () => async dispatch =>{
  dispatch({ type: types.LOGOUT_START});

  try {
    dispatch({type: types.LOGOUT_SUCCESS});
  } catch (error) {
    dispatch({type: types.LOGOUT_FAIL});
  }
};



export const doWelcomeBack = token => {
	return { type: types.WELCOME_BACK, payload: token };
};