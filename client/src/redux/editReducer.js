import { DELETE_DATA, GET_ONE_USER_ERROR, EDIT_USER, GET_ONE_USER, PUT_ONE_USER, SAVE_CHANGES } from './actions';

const defaultForm = {
  name: '',
  email: '',
  birthday: '1994-02-26',
  location: 'Ukraine',
};
/**
 *
 * @param {object} state state before update
 * @param {object} action some object
 * @param {string} action.type type of action for states changing
 * @returns {object} new state after update
 */
function editReducer(state, action) {
  if (state === undefined) {
    return { loading: false, data: defaultForm, error: null };
  }
  if (action.type === SAVE_CHANGES) {
    return { ...state, loading: true };
  }
  if (action.type === GET_ONE_USER) {
    return { ...state, loading: true };
  }
  if (action.type === PUT_ONE_USER) {
    return { loading: false, data: { ...action.payload }, error: null };
  }
  if (action.type === DELETE_DATA) {
    return { loading: false, data: defaultForm, error: null };
  }
  if (action.type === GET_ONE_USER_ERROR) {
    return { loading: false, data: defaultForm, error: action.payload };
  }
  if (action.type === EDIT_USER) {
    return { loading: false, data: { ...state.data, ...action.payload }, error: null };
  }
  return state;
}

export default editReducer;
