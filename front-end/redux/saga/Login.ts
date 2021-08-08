
import { put, takeEvery, throttle} from 'redux-saga/effects';
import { loginSuccess, LOGIN_TYPE_REQUEST } from 'redux/actions/Login';
import { LoginRequestAction } from 'redux/type/Login';


function* loginFlow(action: LoginRequestAction) {
  try {
    const { payload } = action
    yield put(loginSuccess(!payload))
  } catch (error) {
    // TODO
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_TYPE_REQUEST, loginFlow);
}

export default authWatcher;