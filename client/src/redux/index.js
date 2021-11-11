import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SagaMiddleware, rootSaga } from '../saga';
import usersReducer from './usersReducer';
import editReducer from './editReducer';
import promiseReducer from './promiseReducer';

const store = createStore(combineReducers({
  users: usersReducer,
  editData: editReducer,
  promise: promiseReducer,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;
