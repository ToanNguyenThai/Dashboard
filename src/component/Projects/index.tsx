import { useState } from "react";
import { Box, Typography, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CustomButton } from "../UI-components/CustomButton";
import { HiOutlinePlusSm } from "react-icons/hi";

import SearchProject from "./components/SearchProject";
import NewProject from "./components/NewProject";
import ListProject from "./components/ListProject";
import style from "./projects.module.css";

const CustomDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    "&.MuiDialog-paper": {
      maxWidth: "unset",
    },
  },
});

export default function Projects() {
  const [openNewProject, setOpenNewProject] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [projectStatusFilter, setProjectStatusFilter] = useState("");
  const handleOpenNewProject = () => setOpenNewProject(true);
  const handleCloseNewProject = () => setOpenNewProject(false);
  const getSearchValue = (value: string) => {
    setSearchValue(value);
  };
  const getProjectStatusFilter = (value: string) => {
    console.log(value);
    setProjectStatusFilter(value);
  };
  return (
    <>
      <Box className={style.prjHeader}>
        <Box>
          <Typography fontWeight="600" fontSize="25px" color="#223354">
            Projects
          </Typography>
          <Typography fontSize="15px" color="#223354B3">
            These are your active projects
          </Typography>
        </Box>
        <CustomButton
          onClick={handleOpenNewProject}
          sx={{
            borderRadius: "10px",
            padding: "8px 20px",
            textTransform: "unset",
            fontWeight: "600",
          }}
          startIcon={<HiOutlinePlusSm />}
        >
          Create new project
        </CustomButton>
      </Box>
      <Box className={style.prjBody}>
        <SearchProject
          getSearchValue={getSearchValue}
          getProjectStatusFilter={getProjectStatusFilter}
        ></SearchProject>
        <ListProject
          searchValue={searchValue}
          projectStatusFilter={projectStatusFilter}
        ></ListProject>
      </Box>
      <CustomDialog
        open={openNewProject}
        onClose={handleCloseNewProject}
        // TransitionComponent={megaTransition}
        className="modalBackdrop"
      >
        <NewProject close={handleCloseNewProject}></NewProject>
      </CustomDialog>
    </>
  );
}
