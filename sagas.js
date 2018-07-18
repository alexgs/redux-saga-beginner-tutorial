import { delay } from 'redux-saga'
import { all, put, takeEvery } from 'redux-saga/effects'

export function* hello() {
  console.log('Hello Sagas!');
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREMENT'});
}

export default function* rootSaga() {
  yield all([
    hello(),
    watchIncrementAsync(),
  ])
}
