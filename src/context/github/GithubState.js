import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  SET_ALERT,
  UNSET_ALERT,
  CLEAR_USERS
} from '../types';

const GithubeState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    showAlert: false,
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    if (text !== '') {
      setLoading();

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id="9a51da519e4e62f5dc54"&client_secret="8462106e72fc1a707da3d36c4f7f445e7ded85ba"`
      );

      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });
      unsetShowAlert();
    } else {
      setShowAlert();
      setTimeout(() => unsetShowAlert(), 3000);
    }
  };

  // Get User

  // Get Repos

  // Cleare Users

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowAlert = () => dispatch({ type: SET_ALERT });
  const unsetShowAlert = () => dispatch({ type: UNSET_ALERT });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        showAlert: state.showAlert,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubeState;
