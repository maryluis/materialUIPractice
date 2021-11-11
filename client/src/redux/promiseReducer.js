import { GET_USERS, PUT_USERS } from './actions';

function promiseReducer(state, action) {
  if (state === undefined) {
    return {
      loading: false,
    };
  }
  if (action.type === GET_USERS) {
    return { loading: true };
  }
  if (action.type === PUT_USERS) {
    return { loading: false };
  }
  return state;
}

export default promiseReducer;
