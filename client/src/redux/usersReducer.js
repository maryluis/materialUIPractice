import { PUT_USERS } from './actions';

function usersReducer(state, action) {
  if (state === undefined) {
    return [];
  }
  if (action.type === PUT_USERS) {
    return [...action.payload];
  }
  return state;
}

export default usersReducer;
