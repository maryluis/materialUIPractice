import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SagaMiddleware, rootSaga } from '../saga';
import editReducer from './editReducer';
import promiseReducer from './promiseReducer';

const store = createStore(combineReducers({
  editData: editReducer,
  promise: promiseReducer,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;
