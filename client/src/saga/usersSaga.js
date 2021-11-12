import { debounce, put, call, takeEvery } from 'redux-saga/effects';
import { GET_ONE_USER, GET_USERS } from '../redux/actions';
import { actionError, actionPutOneUser, actionPutUsers } from '../redux/actionCreators';
import { getUsers, getOneUser } from '../tools';

function* usersWorker(data) {
  try {
    const newData = yield call(() => getUsers(data.payload));
    yield put(actionPutUsers(newData));
  } catch (e) {
    yield put(actionError(e.message));
  }
}

function* oneUserWorker(data) {
  try {
    const newData = yield call(() => getOneUser(data.payload));
    yield put(actionPutOneUser(newData));
  } catch (e) {
    yield put(actionError(e.message));
  }
}

function* usersWatcher() {
  yield debounce(1000, GET_USERS, usersWorker);
  yield takeEvery(GET_ONE_USER, oneUserWorker);
}

export default usersWatcher;
