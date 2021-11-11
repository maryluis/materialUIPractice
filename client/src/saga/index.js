import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import usersWatcher from './usersSaga';

function* rootSaga() {
  yield all([
    usersWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
