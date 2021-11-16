import { GET_ONE_USER_ERROR, EDIT_USER, GET_USERS, PUT_USERS, DELETE_DATA, PROMISE_ERROR, GET_ONE_USER, PUT_ONE_USER, SAVE_CHANGES, CREATE_USER } from './actions';
/**
 * @typedef {object} userData contains information about user: name, email, location and birthday.
 * sometimes it includes unique id too.
 * @property {string} name
 * @property {string} email
 * @property {string} birthday
 * @property {string} location
 * @property {number} [id]
 */

/**
 * @typedef {object} action
 * @property {userData | string} [payload]
 * @property {string} type
 */

/**
 * @callback actionCreator
 * @param {userData | string} payload
 * @returns {object}
 */

/**
 *
 * @param {string} payload parameter for search user
 * @returns {action} returns action to get all data users which contain query parameter
 */
export const actionGetUsers = (payload) => {
  return ({
    type: GET_USERS,
    payload,
  });
};
/**
 *
 * @param {string} payload unique users parameter to get his data for edit it
 * @returns {action} return action to get data
 */
export const actionGetOneUser = payload => {
  return ({
    type: GET_ONE_USER,
    payload,
  });
};

/**
 *
 * @param {userData} payload has several keys with information about user
 * @returns {action} returns object with data about user and put it to the reducer
 */
export const actionPutOneUser = payload => {
  return ({
    type: PUT_ONE_USER,
    payload,
  });
};
/**
 *
 * @param {Array} payload Arrays each item contains name, email, birthday,
 * location and unique id of user
 * @returns {type: string, payload: object} contains action to put array with
 * data about some users to the reducer
 */
export const actionPutUsers = (payload) => {
  return ({
    type: PUT_USERS,
    payload,
  });
};
/**
 *
 * @param {string} payload if fetch catch an error payload will contains an error message
 * @returns {object} returns action to put an error message to the reducer
 */
export const actionError = (payload) => {
  return ({
    type: PROMISE_ERROR,
    payload,
  });
};

/**
 * @param {userData} payload has several keys with information about user
 * @returns {action}
 */
export const actionEditUser = (payload) => {
  return ({
    type: EDIT_USER, payload,
  });
};
/**
 *
 * @returns {action} action to delete data before component will unmount
 */
export const actionDeleteData = () => {
  return ({
    type: DELETE_DATA,
  });
};
/**
 *
 * @param {string} payload if fetch catch an error payload will contains an error message
 * @returns {action} returns action to put an error message to the reducer
 */
export const actionGetFormError = payload => {
  return ({
    type: GET_ONE_USER_ERROR,
    payload,
  });
};
/**
 * @callback
 * @param {userData} payload
 * @returns {action} action to save changes in the user object and send
 *  it to the backend
 */
export const actionSaveChanges = (payload) => {
  return ({
    type: SAVE_CHANGES,
    payload,
  });
};
/**
 *
 * @param {userData} payload
 * @returns {action} action to save data about new user and send
 *  it to the backend
 */
export const actionCreateUser = (payload) => {
  return ({
    type: CREATE_USER,
    payload,
  });
};
