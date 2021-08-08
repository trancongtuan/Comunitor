//Action Types
export const LOGIN_TYPE_REQUEST = "LOGIN_TYPE_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


//Action Creator
export const loginRequest = () => ({
   type: LOGIN_TYPE_REQUEST,
   payload: false
});

//Action Creator
export const loginSuccess = (data: boolean) => ({
  type: LOGIN_SUCCESS,
  payload: data
});

