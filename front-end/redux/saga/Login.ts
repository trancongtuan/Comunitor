
import { storeToLocalStorage } from 'pages/utils/localStorageService';
import { Unpacked } from 'pages/utils/type-api';
import { call, put, takeEvery} from 'redux-saga/effects';
import { LOGIN_TYPE_REQUEST, loginSuccess, loginFailure } from 'redux/actions/Login';
import { LoginRequestAction } from 'redux/type/Login';
import LoginService from '../service/Login'

function updateToken(tokenId: string) {
  storeToLocalStorage('accessToken', tokenId);
}

function* loginFlow(action: LoginRequestAction) {
  try {
    const loginService = new LoginService()
    const { payload } = action
    const { data } = yield call(loginService.login, payload.email, payload.password)
    yield put(loginSuccess(data.response.tokenId))
    yield call(updateToken, data.response.tokenId)
  } catch (error) {
    yield put(loginFailure(error.message))
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_TYPE_REQUEST, loginFlow);
}

export default authWatcher;