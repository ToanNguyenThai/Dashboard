import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { CustomWidthTooltipWhite } from "../CustomWidthTooltipWhite";

import { useSelector, useDispatch } from "react-redux";
import { loginSelectors, loginActions } from "../../redux/slice/login";
import { User } from "../../model/User";
import {
  MdHomeFilled,
  MdOutlineEmail,
  MdEditCalendar,
  MdOutlineMessage,
  MdOutlinePowerSettingsNew,
} from "react-icons/md";

import avatar from "../../assets/img/avatar.jpg";
import style from "./sidebar.module.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const user: User = useSelector(loginSelectors.selectAccount);

  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarNavItems = [
    {
      display: t("SIDEBAR.HOME"),
      icon: <MdHomeFilled></MdHomeFilled>,
      to: `/`,
      selectIndex: 0,
    },
    {
      display: t("SIDEBAR.MAIL"),
      icon: <MdOutlineEmail></MdOutlineEmail>,
      to: `/mail`,
      selectIndex: 1,
    },
  ];

  useEffect(() => {
    if (location.pathname === "/") setActiveIndex(0);
    else setActiveIndex(1);
  }, []);
  const handleActiveItem = (index: number, url: string) => {
    let activeItem: number = 0;
    sidebarNavItems.forEach((item) => {
      if (item.selectIndex === index) activeItem = index;
    });
    setActiveIndex(activeItem);
    navigate(url);
  };

  return (
    <Box
      sx={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#11192a",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "40px 30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ borderRadius: "100%" }} src={avatar}></img>
        <Typography
          fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
          variant="body1"
          color="white"
          marginTop="10px"
        >
          {user.email}
        </Typography>

        <Typography
          fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
          variant="body1"
          color="rgba(255, 255, 255, 0.7)"
        >
          Technical Manager
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          marginTop: "30px",
        }}
      ></Box>
      <Box
        sx={{
          marginTop: "30px",
        }}
      >
        <Box className={style.field_title}>General</Box>

        {sidebarNavItems.map((item, index) => (
          <Box onClick={() => handleActiveItem(index, item.to)} key={index}>
            <Box
              className={`${style.sidebar_item} ${
                activeIndex === index ? style.active : ""
              }`}
            >
              <Box className={style.sidebar_icon}>{item.icon}</Box>
              <Box className={style.sidebar_text}>{item.display}</Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={style.sidebar_footer}>
        <CustomWidthTooltipWhite title="Events Calendar" arrow placement="top">
          <Box className={style.sidebar_footer_item}>
            <MdEditCalendar fontSize="20px"></MdEditCalendar>
          </Box>
        </CustomWidthTooltipWhite>

        <CustomWidthTooltipWhite title="Messenger" arrow placement="top">
          <Box className={style.sidebar_footer_item}>
            <MdOutlineMessage fontSize="20px"></MdOutlineMessage>
            <Box className={style.greendot}></Box>
          </Box>
        </CustomWidthTooltipWhite>
        <CustomWidthTooltipWhite title="Logout" arrow placement="top">
          <Box
            onClick={() => dispatch(loginActions.logout())}
            className={style.sidebar_footer_item}
          >
            <MdOutlinePowerSettingsNew fontSize="20px"></MdOutlinePowerSettingsNew>
          </Box>
        </CustomWidthTooltipWhite>
      </Box>
    </Box>
  );
}
