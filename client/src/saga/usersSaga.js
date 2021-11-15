import { debounce, put, call, takeEvery, takeLeading } from 'redux-saga/effects';
import { CREATE_USER, GET_ONE_USER, GET_USERS, SAVE_CHANGES } from '../redux/actions';
import { actionError, actionPutOneUser, actionGetFormError, actionPutUsers, actionDeleteData } from '../redux/actionCreators';
import { getUsers, getOneUser, editUser, postUser, URL_USERS } from '../tools';

function* usersWorker(data) {
  try {
    const newData = yield call(() => getUsers(data.payload));
    yield put(actionPutUsers(newData));
  } catch (e) {
    yield put(actionError(e.message));
  }
}

function* oneUserWorker(data) {
  if (data.payload) {
    try {
      const newData = yield call(() => getOneUser(data.payload));
      yield put(actionPutOneUser(newData));
    } catch (e) {
      yield put(actionGetFormError(e.message));
    }
  }
}

function* saveUserWorker(data) {
  yield call(() => editUser(data.payload.id, data.payload.data));
  yield put(actionDeleteData());
}

function* createUserWorker(data) {
  yield call(() => postUser(URL_USERS, data.payload));
  yield put(actionDeleteData());
}

function* usersWatcher() {
  yield debounce(1000, GET_USERS, usersWorker);
}

function* formUserWatcher() {
  yield takeEvery(GET_ONE_USER, oneUserWorker);
  yield takeLeading(SAVE_CHANGES, saveUserWorker);
  yield takeLeading(CREATE_USER, createUserWorker);
}

export { usersWatcher, formUserWatcher };
