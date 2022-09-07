import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import avatar from "../../../../assets/img/avatar.jpg";
import { loginSelectors } from "../../../../redux/slice/login";
import { MdKeyboardArrowRight, MdLock } from "react-icons/md";

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
        <Box>
          <Typography
            fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
            variant="body1"
            fontSize="15px"
            color="black"
          >
            {user.email}
          </Typography>
          <Typography
            fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
            variant="body1"
            fontSize="15px"
            color="#9297B7"
          >
            Technical Manager
          </Typography>
        </Box>
      </Box>
      <Box className={style.navList}>
        <Box className={style.navItem}>
          <Typography
            className={style.navText}
            fontWeight="600"
            fontSize="14px"
          >
            My Account
          </Typography>
          <MdKeyboardArrowRight
            style={{ transform: "translateY(2px)" }}
            fontSize="17px"
          ></MdKeyboardArrowRight>
        </Box>
        <Box className={style.navItem}>
          <Typography
            className={style.navText}
            fontWeight="600"
            fontSize="14px"
          >
            Profile settings
          </Typography>
          <MdKeyboardArrowRight
            style={{ transform: "translateY(2px)" }}
            fontSize="17px"
          ></MdKeyboardArrowRight>
        </Box>

        <Box className={style.navItem}>
          <Typography
            className={style.navText}
            fontWeight="600"
            fontSize="14px"
          >
            Active tasks
          </Typography>
          <MdKeyboardArrowRight
            style={{ transform: "translateY(2px)" }}
            fontSize="17px"
          ></MdKeyboardArrowRight>
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
