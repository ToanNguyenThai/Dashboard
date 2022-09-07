import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideMenu from "./component/SideMenu";

const Mailbox = () => {
  return (
    <>
      <SideMenu />
      <Box
        sx={{
          marginLeft: "280px",
        }}
      >
        <Outlet></Outlet>
      </Box>
    </>
  );
};
export default Mailbox;
