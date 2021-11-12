import { EDIT_USER, GET_USERS, PUT_USERS, DELETE_DATA, PROMISE_ERROR } from './actions';

export const actionGetUsers = (query) => {
  return ({
    type: GET_USERS,
    payload: query,
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
