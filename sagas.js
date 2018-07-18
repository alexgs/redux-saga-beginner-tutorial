import { delay } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'

export function* hello() {
  console.log('Hello Sagas!');
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'});
}

export default function* rootSaga() {
  yield all([
    hello(),
    watchIncrementAsync(),
  ])
}
