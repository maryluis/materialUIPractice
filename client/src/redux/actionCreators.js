import { EDIT_USER, GET_USERS, PUT_USERS, DELETE_DATA, PROMISE_ERROR, GET_ONE_USER, PUT_ONE_USER } from './actions';

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
