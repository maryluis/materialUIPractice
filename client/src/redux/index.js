import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SagaMiddleware, rootSaga } from '../saga';
import editReducer from './editReducer';
import usersReducer from './usersReducer';

const store = createStore(combineReducers({
  editData: editReducer,
  users: usersReducer,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;
