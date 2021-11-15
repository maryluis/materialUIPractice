import { put, call, takeEvery, takeLeading } from 'redux-saga/effects';
import { actionPutOneUser, actionGetFormError, actionDeleteData } from '../redux/actionCreators';
import { getOneUser, editUser, postUser, URL_USERS } from '../tools';
import { CREATE_USER, GET_ONE_USER, SAVE_CHANGES } from '../redux/actions';

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

function* formUserWatcher() {
  yield takeEvery(GET_ONE_USER, oneUserWorker);
  yield takeLeading(SAVE_CHANGES, saveUserWorker);
  yield takeLeading(CREATE_USER, createUserWorker);
}
export default formUserWatcher;
