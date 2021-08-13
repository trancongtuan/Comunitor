import { LOGIN_SUCCESS, LOGIN_TYPE_REQUEST } from "redux/actions/Login";

export interface LoginRequestAction {
  type: typeof LOGIN_TYPE_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { token: string };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export type LOGIN_TYPE_ACTION = LoginRequestAction | LoginSuccessAction | LoginFailureAction