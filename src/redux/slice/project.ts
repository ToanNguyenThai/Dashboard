import {
  createSelector,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { ProjectState } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import avatar from "../../assets/img/avatar.jpg";
const name = "project";

type initialStateType = {
  ProjectList: ProjectState[];
};

const ProjectList: ProjectState[] = [
  {
    id: uuidv4(),
    title: "Cebus apella",
    description: "",
    tags: [{ title: "Software" }],
    members: [
      {
        name: "Hana Siprone",
        img: avatar,
      },
      {
        name: "Maria Calzoni",
        img: avatar,
      },
      {
        name: "Haha",
        img: avatar,
      },
      {
        name: "Huhu",
        img: avatar,
      },
      {
        name: "Hihi",
        img: avatar,
      },
      {
        name: "Hehe",
        img: avatar,
      },
    ],
    dueDate: "April 13 2026",
    progress: 56,
    status: "Completed",
  },
  {
    id: uuidv4(),
    title: "Macropus agilis",
    description: "",
    tags: [{ title: "Backend" }],
    members: [
      {
        name: "Hana Siprone",
        img: avatar,
      },
      {
        name: "Maria Calzoni",
        img: avatar,
      },
    ],
    dueDate: "April 13 2026",
    progress: 48,
    status: "Not started",
  },
  {
    id: uuidv4(),
    title: "Felis libyca",
    description: "",
    tags: [{ title: "Design Project" }, { title: "Marketing Research" }],
    members: [
      {
        name: "Hana Siprone",
        img: avatar,
      },
      {
        name: "Maria Calzoni",
        img: avatar,
      },
      {
        name: "Pep Guardiola",
        img: avatar,
      },
    ],
    dueDate: "April 13 2026",
    progress: 22,
    status: "In progress",
  },
];
const initialState: initialStateType = {
  ProjectList,
};
const projectSlice = createSlice({
  name,
  initialState,
  reducers: {
    createProject: (state, action: PayloadAction<ProjectState>) => {
      state.ProjectList.push(action.payload);
    },
    deleteProject: (state, action) => {
      let deletedList = state.ProjectList.filter(
        (item) => item.id !== action.payload
      );
      state.ProjectList = deletedList;
    },
  },
});

const selector = (state: { [x: string]: any }) => state[name];
const selectProject = createSelector(
  selector,
  ({ ProjectList }) => ProjectList
);
export const projectSelectors = { selectProject };

const { createProject, deleteProject } = projectSlice.actions;
export const projectActions = { createProject, deleteProject };
export default projectSlice.reducer;
