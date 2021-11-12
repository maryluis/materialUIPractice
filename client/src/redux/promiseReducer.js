import { GET_USERS, PUT_USERS } from './actions';

function promiseReducer(state, action) {
  if (state === undefined) {
    return {
      loading: false,
      error: false,
      data: [],
    };
  }
  if (action.type === GET_USERS) {
    return { ...state, loading: true };
  }
  if (action.type === PUT_USERS) {
    return { ...state, data: action.payload, loading: false };
  }
  return state;
}

export default promiseReducer;
