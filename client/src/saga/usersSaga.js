import { debounce, put, call } from 'redux-saga/effects';
import { GET_USERS } from '../redux/actions';
import { actionError, actionPutUsers } from '../redux/actionCreators';
import { getUsers } from '../tools';
/**
 * Saga worker which takes data about several users by query or all users
 * @param {object} data includes action string and query string in payload
 * @param {atring} data.payload query string to find users. May be empty
 */
function* usersWorker(data) {
  try {
    const newData = yield call(() => getUsers(data.payload));
    yield put(actionPutUsers(newData));
  } catch (e) {
    yield put(actionError(e.message));
  }
}
/**
 * Watcher to catch action get some users
 */
function* usersWatcher() {
  yield debounce(1000, GET_USERS, usersWorker);
}

export default usersWatcher;
