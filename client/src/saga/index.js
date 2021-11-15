import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import usersWatcher from './usersSaga';
import formUserWatcher from './formSaga';

function* rootSaga() {
  yield all([
    usersWatcher(),
    formUserWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
