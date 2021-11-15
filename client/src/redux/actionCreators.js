import { GET_ONE_USER_ERROR, EDIT_USER, GET_USERS, PUT_USERS, DELETE_DATA, PROMISE_ERROR, GET_ONE_USER, PUT_ONE_USER, SAVE_CHANGES, CREATE_USER } from './actions';

export const actionGetUsers = (query) => {
  return ({
    type: GET_USERS,
    payload: query,
  });
};

export const actionGetOneUser = id => {
  return ({
    type: GET_ONE_USER,
    payload: id,
  });
};
export const actionPutOneUser = payload => {
  return ({
    type: PUT_ONE_USER,
    payload,
  });
};

export const actionPutUsers = (payload) => {
  return ({
    type: PUT_USERS,
    payload,
  });
};

export const actionError = (payload) => {
  return ({
    type: PROMISE_ERROR,
    payload,
  });
};

export const actionEditUser = (payload) => {
  return ({
    type: EDIT_USER, payload,
  });
};

export const actionDeleteData = () => {
  return ({
    type: DELETE_DATA,
  });
};

export const actionGetFormError = payload => {
  return ({
    type: GET_ONE_USER_ERROR,
    payload,
  });
};
export const actionSaveChanges = (payload) => {
  return ({
    type: SAVE_CHANGES,
    payload,
  });
};

export const actionCreateUser = (payload) => {
  return ({
    type: CREATE_USER,
    payload,
  });
};
