import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { usersWatcher, formUserWatcher } from './usersSaga';

function* rootSaga() {
  yield all([
    usersWatcher(),
    formUserWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
