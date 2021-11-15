import { GET_ONE_USER_ERROR, EDIT_USER, GET_USERS, PUT_USERS, DELETE_DATA, PROMISE_ERROR, GET_ONE_USER, PUT_ONE_USER, SAVE_CHANGES, CREATE_USER } from './actions';
/**
 *
 * @param {string} query parameter for search user
 * @returns {object} returns action to get all data users which contain query parameter
 */
export const actionGetUsers = (query) => {
  return ({
    type: GET_USERS,
    payload: query,
  });
};
/**
 *
 * @param {string} id unique users parameter to get his data for edit it
 * @returns {object} return action to get data
 */
export const actionGetOneUser = id => {
  return ({
    type: GET_ONE_USER,
    payload: id,
  });
};

/**
 *
 * @param {object} payload has several keys with information about user
 * @param {string} payload.name
 * @param {string} payload.birthday
 * @param {string} payload.location
 * @param {string} payload.email
 * @param {number} payload.id
 * @returns {object} returns object with data about user and put it to the reducer
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
 * @param {object} payload has several keys with information about user
 * @param {string} payload.name
 * @param {string} payload.birthday
 * @param {string} payload.location
 * @param {string} payload.email
 * @param {number} payload.id
 * @returns { type: string, payload: object  }
 */
export const actionEditUser = (payload) => {
  return ({
    type: EDIT_USER, payload,
  });
};
/**
 *
 * @returns { type: string } action to delete data before component will unmount
 */
export const actionDeleteData = () => {
  return ({
    type: DELETE_DATA,
  });
};
/**
 *
 * @param {string} payload if fetch catch an error payload will contains an error message
 * @returns {object} returns action to put an error message to the reducer
 */
export const actionGetFormError = payload => {
  return ({
    type: GET_ONE_USER_ERROR,
    payload,
  });
};
/**
 *
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.birthday
 * @param {string} payload.location
 * @param {string} payload.email
 * @param {number} payload.id
 * @returns { type: string, payload: object  } action to save changes in the user object and send
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
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.birthday
 * @param {string} payload.location
 * @param {string} payload.email
 * @returns { type: string, payload: object  } action to save data about new user and send
 *  it to the backend
 */
export const actionCreateUser = (payload) => {
  return ({
    type: CREATE_USER,
    payload,
  });
};
