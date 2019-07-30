import umtsApiWithAuth from '../../api/umtsApiWithAuth'
import { types }from './index'
//res.data.user.(insert thing i want here)
//res.data.token

export const doSignIn = credentials => dispatch => {
  dispatch({ type: types.LOGIN_START});

return umtsApiWithAuth()

        .post('/auth/login', credentials)

        .then(
          res => {
            console.log(res)
            localStorage.setItem('token', (res.data.token))
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.token});
          }
        )

        .catch(
          err => {
          dispatch({type: types.LOGIN_FAIL, payload: err.res.data})
          console.log(err)
          }
        )
};

export const doCreateAccount = newUserDetails => dispatch =>{
  dispatch({ type: types.CREATE_USER_START});
  return umtsApiWithAuth().post('/auth/register', newUserDetails)
  .then(
    res => {
      dispatch({ type: types.CREATE_USER_SUCCESS});
      console.log(res)
    }
  )
  .catch(
    err => console.log(err)
  )

};



// try {
//   const res = await umtsApiWithAuth.post('/auth/register', newUserDetails);

//   dispatch({type: types.CREATE_USER_SUCCESS, payload: {message: 'User was created successfully!'} });

// } catch (error) {
//   dispatch({type: types.CREATE_USER_FAIL, payload: error.res.data});
// }





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
