import { LOGIN_FAILURE, LOGIN_TYPE_ACTION } from 'redux/type/Login';
import { string } from 'yup/lib/locale';
import { LOGIN_SUCCESS, LOGIN_TYPE_REQUEST } from '../actions/Login'

export interface LoginState {
  token: string,
  loading: boolean,
  messageErr: string
}

export const initialState: LoginState = { token: '', loading: false, messageErr: '' };

function authReducer(state = initialState, action: LOGIN_TYPE_ACTION) {
  switch (action.type) {
    case LOGIN_TYPE_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {...state, token: action.payload.token, loading: false}
    case LOGIN_FAILURE:
      return {...state, loading: false, messageErr: action.payload}
    default:
      return state;
  }
}

export default authReducer;
