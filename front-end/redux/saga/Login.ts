
import { put, takeEvery, throttle} from 'redux-saga/effects';
import LoginAction, { LOGIN_TYPE_REQUEST } from 'redux/actions/Login';
import { LoginRequestAction } from 'redux/type/Login';


function* loginFlow(action: LoginRequestAction) {
  try {
    const loginAction = new LoginAction()
    const { payload } = action
    yield put(loginAction.loginSuccess(!payload))
  } catch (error) {
    // TODO
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_TYPE_REQUEST, loginFlow);
}

export default authWatcher;