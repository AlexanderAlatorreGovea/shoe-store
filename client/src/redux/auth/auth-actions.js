import axios from 'axios';
import { returnErrors } from './../errors/error-actions';
import { showAlert } from '../utils/alerts'; 

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    PASSWORD_RETRIEVAL_SUCCESS, 
    PASSWORD_RETRIEVAL_FAIL
} from './auth-types';

// Check token & load user
export const forgotPassword = ({ email }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json' 
    }
  };

  const body = JSON.stringify({ email });

  axios
    .post('/api/v1/auth/forgotPassword', body, config, { timeout: 1.2 })
    .then(res => {
      dispatch({
        type: PASSWORD_RETRIEVAL_SUCCESS,
        payload: res.data
      })
      showAlert('success', 'Please check your mailbox!');
      }) 
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'PASSWORD_RETRIEVAL_FAIL')
      );
      dispatch({
        type: PASSWORD_RETRIEVAL_FAIL
      });
    }); 
};
   
// Register User
export const register = ({ email, password, passwordConfirm, name }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password, passwordConfirm, name });

  axios
    .post('/api/v1/auth/signup', body, config, { timeout: 1.2 })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
      showAlert('success', 'You have successfully signed up!');
        window.setTimeout(() => {
          window.location.assign('/');
        }, 1500);
      }) 
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    }); 
};
  
// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  dispatch({
    type: USER_LOADING,
  }); 

  axios
    .post('/api/v1/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
        if (res.data.status === 'success') {
          showAlert('success', 'Logged in successfully!');
      }
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
      showAlert('error', 'Error logging in! Try again.');
    });
};
    
// Logout User
export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/auth/logout'
    });
    if (res.data.status = 'success')  {
        window.location.reload();
        showAlert('success', 'You are now logged out.');
      }
    return {
      type: LOGOUT_SUCCESS
    };
  } catch (err) {
    if (err) {
      showAlert('error', 'Error logging out! Try again.');
      window.setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }
};
  
// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};