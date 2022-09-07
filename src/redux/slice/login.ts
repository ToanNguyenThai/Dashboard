import { createSelector, createSlice } from '@reduxjs/toolkit';
const name = 'login';

const initialState = {
  account: {},
};

const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: state => {
      state.account = {};

    },
  
    login: (state, action) => {
      state.account = action.payload;
    },
  },
 
});

const selector = (state: { [x: string]: any; }) => state[name];
const selectAccount = createSelector(selector, ({ account }) => account);


export const loginSelectors = { selectAccount };

const { logout, login,  } = loginSlice.actions;
export const loginActions = { logout,  login };
export default loginSlice.reducer;
