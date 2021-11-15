import { GET_USERS, PROMISE_ERROR, PUT_USERS } from './actions';

function usersReducer(state, action) {
  if (state === undefined) {
    return {
      loading: false,
      error: null,
      data: [],
    };
  }
  if (action.type === GET_USERS) {
    return { ...state, loading: true };
  }
  if (action.type === PUT_USERS) {
    return { ...state, data: action.payload, loading: false };
  }
  if (action.type === PROMISE_ERROR) {
    return { loading: false, data: [], error: action.payload };
  }
  return state;
}

export default usersReducer;
