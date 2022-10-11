import { createSelector, createSlice } from '@reduxjs/toolkit';
const name = 'project';

const initialState = {
  projects: [
    
  ]
};

const projectSlice = createSlice({
  name,
  initialState,
  reducers: {
    createProject: (state, {payload: any}) => {
      let curr = state.projects
      // curr.push(payload)
      state.projects = curr
    },
   
  },  
 
});

const selector = (state: { [x: string]: any; }) => state[name];
const selectProject = createSelector(selector, ({ project }) => project);
export const emailSelectors = { selectProject };

const {  createProject  } = projectSlice.actions;
export const projectActions = { createProject};
export default projectSlice.reducer;
