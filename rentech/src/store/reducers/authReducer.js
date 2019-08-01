import { types } from "../actions";
import jwt_decode from "jwt-decode";

const initialState = {
  token: '',
  user: null,
  isAuth: false,
  isLoading: false,
  errors: null,
  isSuccess: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false,
        isSuccess: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
        isSuccess: true
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };



      case types.GET_USER_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: true,
        isSuccess: false
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isSuccess: true
      };
    case types.GET_USER_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };



      case types.EDIT_USER_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isSuccess: true
      };
    case types.EDIT_USER_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };



       case types.EDIT_PASS_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.EDIT_PASS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isSuccess: true
      };
    case types.EDIT_PASS_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };



    case types.CREATE_USER_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false,
        user: {},
        isSuccess: false
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        isAuth: false,
        user: {},
        isSuccess: true
      };
    case types.CREATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isAuth: false,
        user: {},
        isSuccess: false
      };



    case types.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isSuccess: false
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isAuth: false,
        errors: null,
        isLoading: false,
        isSuccess: false
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: "An unknown error has occurred",
        isSuccess: false
      };


      
    case types.WELCOME_BACK:
      const wbUser = jwt_decode(payload);
      return {
        ...state,
        isLoading: false,
        errors: null,
        isAuth: true,
        user: wbUser,
        isSuccess: false
      };

    default:
      return state;
  }
};
