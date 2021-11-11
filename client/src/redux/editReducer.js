import { DELETE_DATA, EDIT_USER } from './actions';

function editReducer(state, action) {
  if (state === undefined) {
    return {};
  }
  if (action.type === EDIT_USER) {
    return action.payload;
  } if (action.type === DELETE_DATA) {
    return {};
  }
  return state;
}

export default editReducer;
