import { DELETE_DATA, GET_ONE_USER_ERROR, EDIT_USER, GET_ONE_USER, PUT_ONE_USER, SAVE_CHANGES } from './actions';

function editReducer(state, action) {
  if (state === undefined) {
    return { loading: false, data: { name: '', email: '', birthday: '1994-02-26', location: 'Ukraine' }, error: null };
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
    return { loading: false, data: { name: '', email: '', birthday: '1994-02-26', location: 'Ukraine' }, error: null };
  }
  if (action.type === GET_ONE_USER_ERROR) {
    return { loading: false, data: { name: '', email: '', birthday: '1994-12-26', location: 'Ukraine' }, error: action.payload };
  }
  if (action.type === EDIT_USER) {
    return { loading: false, data: { ...state.data, ...action.payload }, error: null };
  }
  return state;
}

export default editReducer;
