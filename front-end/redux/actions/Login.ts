import { Api } from "redux/api/api";
import { API_CONFIG } from "redux/type";

//Action Types
export const LOGIN_TYPE_REQUEST = "LOGIN_TYPE_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


export default class Login extends Api {

  /**
   * Constructor
   */
  public constructor() {
    super(API_CONFIG)
  }

  public loginRequest = () => ({
    type: LOGIN_TYPE_REQUEST,
    payload: false,
  });

  public loginSuccess = (data: boolean) => ({
    type: LOGIN_SUCCESS,
    payload: data,
  });
}
