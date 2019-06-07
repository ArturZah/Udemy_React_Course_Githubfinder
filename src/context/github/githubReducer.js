import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  SET_ALERT,
  CLEAR_USERS,
  UNSET_ALERT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_ALERT:
      return {
        ...state,
        showAlert: true,
        loading: false
      };
    case UNSET_ALERT:
      return {
        ...state,
        showAlert: false,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
