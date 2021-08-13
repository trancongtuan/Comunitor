import { LOGIN_FAILURE } from "redux/type/Login";

//Action Types
export const LOGIN_TYPE_REQUEST = "LOGIN_TYPE_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


export function loginRequest(payload: { email: string; password: string }) {
  return {
    type: LOGIN_TYPE_REQUEST,
    payload,
  };
}

export function loginSuccess(token: string) {
  return {
    type: LOGIN_SUCCESS,
    payload: { token },
  };
}

export function loginFailure(error: string) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}
