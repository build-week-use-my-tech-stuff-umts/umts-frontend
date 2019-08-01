import umtsApiWithAuth from '../../api/umtsApiWithAuth'
import { types }from './index'


//res.data.user.(insert thing i want here)
//res.data.token

export const getUserProfile = () => dispatch => {

  dispatch({ type: types.GET_USER_START});
  return umtsApiWithAuth()
    .get('/auth/user')
    .then(
      res => {
        // console.log(res)
        dispatch({type: types.GET_USER_SUCCESS, payload: res.data.user});
      }
    )
    .catch(
      err => {
        dispatch({type: types.GET_USER_FAIL, payload: err})
        console.log(err)
      }
    )

};

export const editUser = user => dispatch => {

  dispatch({ type: types.GET_USER_START});
  return umtsApiWithAuth()
    .put('/auth/profile', user)
    .then(
      res => {
        console.log(res)
        dispatch({type: types.GET_USER_SUCCESS, payload: res.data.user});
      }
    )
    .catch(
      err => {
        dispatch({type: types.GET_USER_FAIL, payload: err})
        console.log(err)
      }
    )

};

export const editPass = user => dispatch => {

  dispatch({ type: types.GET_PASS_START});
  return umtsApiWithAuth()
    .put('/auth/profile', user)
    .then(
      res => {
        console.log(res)
        dispatch({type: types.GET_PASS_SUCCESS, payload: res.data.user});
      }
    )
    .catch(
      err => {
        dispatch({type: types.GET_PASS_FAIL, payload: err})
        console.log(err)
      }
    )

};


export const doSignIn = credentials => dispatch => {

  dispatch({ type: types.LOGIN_START});
  return umtsApiWithAuth()
    .post('/auth/login', credentials)
    .then(
      res => {
        // console.log(res)
        localStorage.setItem('token', (res.data.token));
        dispatch({type: types.LOGIN_SUCCESS, payload: res.data});
      }
    )
    .catch(
      err => {
        dispatch({type: types.LOGIN_FAIL, payload: err})
        console.log(err)
      }
    )

};

export const doCreateAccount = newUserDetails => dispatch =>{
  dispatch({ type: types.CREATE_USER_START});
  return umtsApiWithAuth().post('/auth/register', newUserDetails)
  .then(
    res => {
      dispatch({ type: types.CREATE_USER_SUCCESS, payload: {message: 'User was created successfully!'}});
      console.log(res)
    }
  )
  .catch(
    err => {
      dispatch({type: types.CREATE_USER_FAIL, payload: err})
       console.log(err)
    } 
  )

};

export const doSignOut = () => dispatch =>{
  dispatch({ type: types.LOGOUT_START});
};







export const doWelcomeBack = token => {
	return { type: types.WELCOME_BACK, payload: token };
};
