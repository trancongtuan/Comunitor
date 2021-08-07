
import {delay, put, takeEvery} from 'redux-saga/effects';
import { INCREMENT_COUNTER } from 'redux/actions/counterActions';

export const SAGA_ACTION_SUCCESS = `${INCREMENT_COUNTER}_SUCCESS`;

function* sagaAction() {
    yield delay(100);
    yield put({
        type: SAGA_ACTION_SUCCESS,
        data: 'done',
    });
}

export function* rootCounter() {
    yield takeEvery(INCREMENT_COUNTER, sagaAction);
}

export default rootCounter;