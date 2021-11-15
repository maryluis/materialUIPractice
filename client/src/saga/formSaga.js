import { put, call, takeEvery, takeLeading } from 'redux-saga/effects';
import { actionPutOneUser, actionGetFormError, actionDeleteData } from '../redux/actionCreators';
import { getOneUser, editUser, postUser, URL_USERS } from '../tools';
import { CREATE_USER, GET_ONE_USER, SAVE_CHANGES } from '../redux/actions';
/**
 * This saga worker gets some users by query or takes all users
 * @param {object} data contains string to get users by query parameter
 * @param {string} data.payload query parameter to search users
 */
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
/**
 * This saga worker takes edited data about user and sends it to the backend
 * @param {object} data
 * @param {string} data.payload.id unique users parameter to put changes to the correct
 * object at the backend
 * @param {object} data.payload.data object with keys name, email birthday and location parameters
 */
function* saveUserWorker(data) {
  yield call(() => editUser(data.payload.id, data.payload.data));
  yield put(actionDeleteData());
}
/**
 * This saga worker creates new user and sends data to the backend
 * @param {object} data contains action string and payload (data about new user)
 * @param {object} data.payload data about new user contains name, email, location and birthday
 */
function* createUserWorker(data) {
  yield call(() => postUser(URL_USERS, data.payload));
  yield put(actionDeleteData());
}
/**
 * Saga watcher which looks for actions about form and users changes
 */
function* formUserWatcher() {
  yield takeEvery(GET_ONE_USER, oneUserWorker);
  yield takeLeading(SAVE_CHANGES, saveUserWorker);
  yield takeLeading(CREATE_USER, createUserWorker);
}
export default formUserWatcher;
