import { LOGIN_TYPE_ACTION } from 'redux/type/Login';
import { LOGIN_SUCCESS, LOGIN_TYPE_REQUEST } from '../actions/Login'

export interface LoginState {
  token: boolean,
  loading: boolean
}

export const initialState: LoginState = { token: false, loading: false };

function authReducer(state = initialState, action: LOGIN_TYPE_ACTION) {
  switch (action.type) {
    case LOGIN_TYPE_REQUEST:
      return { ...state, token: action.payload, loading: true };
    case LOGIN_SUCCESS:
      return {...state, token: action.payload, loading: false}
    default:
      return state;
  }
}

export default authReducer;
