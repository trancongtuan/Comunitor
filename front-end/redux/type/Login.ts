import { LOGIN_SUCCESS, LOGIN_TYPE_REQUEST } from "redux/actions/Login";

export interface LoginRequestAction {
  type: typeof LOGIN_TYPE_REQUEST;
  payload: Partial<boolean>;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: Partial<boolean>;
}

export type LOGIN_TYPE_ACTION = LoginRequestAction | LoginSuccessAction