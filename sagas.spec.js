import test from 'tape';

import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { incrementAsync } from './sagas'

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    '(1) incrementAsync should call `delay(1000)`'
  );

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    '(2) incrementAsync should dispatch an INCREMENT action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    '(3) incrementAsync should end'
  );

  assert.end();
});
