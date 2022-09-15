import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import avatar from "../../../../assets/img/avatar.jpg";
import { loginSelectors } from "../../../../redux/slice/login";
import { MdPermContactCalendar, MdLock, MdInbox } from "react-icons/md";
import { TiFlowChildren } from "react-icons/ti";

import style from "./profile.module.css";

interface profileProps {
  signOut: any;
}

export default function Profile({ signOut }: profileProps) {
  const user = useSelector(loginSelectors.selectAccount);

  return (
    <Box className={style.modalProfile}>
      <Box className={style.modalHeader}>
        <img src={avatar} className={style.avatar} />
        <Box
          sx={{
            transform: "translateX(-10px)",
          }}
        >
          <Typography
            fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
            variant="body1"
            fontSize="14px"
            fontWeight="700"
            color="rgb(110, 117, 159);"
          >
            {user.email}
          </Typography>
          <Typography
            fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
            variant="body1"
            fontSize="14px"
            color="#9297B7"
          >
            Technical Manager
          </Typography>
        </Box>
      </Box>
      <Box className={style.navList}>
        <Box className={style.navItem}>
          <MdPermContactCalendar
            color=" rgb(110, 117, 159)"
            fontSize="20px"
          ></MdPermContactCalendar>
          <Typography className={style.navText}>Profile</Typography>
        </Box>
        <Box className={style.navItem}>
          <MdInbox color=" rgb(110, 117, 159)" fontSize="20px"></MdInbox>
          <Typography className={style.navText}>Profile settings</Typography>
        </Box>

        <Box className={style.navItem}>
          <TiFlowChildren
            color=" rgb(110, 117, 159)"
            fontSize="20px"
          ></TiFlowChildren>
          <Typography className={style.navText}>Active tasks</Typography>
        </Box>
      </Box>

      <Box onClick={signOut} className={style.signOut}>
        <Box className={style.signOutBtn}>
          <MdLock color="#5569ff" fontSize="20px">
            {" "}
          </MdLock>
          <Typography
            variant="body1"
            fontSize="15px"
            color="#5569ff"
            marginLeft="10px"
            fontWeight="600"
          >
            Sign out
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
