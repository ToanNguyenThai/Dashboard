import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../slice/login';
import emailReducer from '../slice/email'
import projectReducer from '../slice/project'

export default combineReducers({
  login: loginReducer,
  email: emailReducer,
  project: projectReducer

});
