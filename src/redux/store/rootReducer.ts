import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../slice/login';
import emailReducer from '../slice/email'
export default combineReducers({
  login: loginReducer,
  email: emailReducer
});
