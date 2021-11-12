import { debounce, put, call } from 'redux-saga/effects';
import { GET_USERS } from '../redux/actions';
import { actionError, actionPutUsers } from '../redux/actionCreators';
import { getUsers } from '../tools';

function* usersWorker(data) {
  try {
    const newData = yield call(() => getUsers(data.payload));
    yield put(actionPutUsers(newData));
  } catch (e) {
    yield put(actionError(e.message));
  }
}

function* usersWatcher() {
  yield debounce(1000, GET_USERS, usersWorker);
}

export default usersWatcher;
