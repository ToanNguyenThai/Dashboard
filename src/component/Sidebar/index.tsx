import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import { CustomWidthTooltipWhite } from "../CustomWidthTooltipWhite";
import { useSelector, useDispatch } from "react-redux";
import { loginSelectors, loginActions } from "../../redux/slice/login";
import { User } from "../../model/User";
import {
  MdEditCalendar,
  MdOutlineMessage,
  MdOutlinePowerSettingsNew,
  MdKeyboardArrowDown,
  MdInsertChartOutlined,
  MdOutlineDashboard,
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
  const [activeItem, setActiveItem] = useState("");

  const sidebarNavItems = [
    {
      display: t("SIDEBAR.APPLICATION"),
      icon: <MdInsertChartOutlined></MdInsertChartOutlined>,
      selectIndex: 1,
      children: [
        {
          display: t("SIDEBAR.MAIL"),
          to: `/mail`,
        },
        {
          display: t("SIDEBAR.CALENDAR"),
          to: `/calendar`,
        },
        {
          display: t("SIDEBAR.FILE"),
          to: `/file`,
        },
      ],
    },
    {
      display: t("SIDEBAR.DASHBOARD"),
      icon: <MdOutlineDashboard></MdOutlineDashboard>,
      selectIndex: 2,
      children: [
        {
          display: t("SIDEBAR.REPORTS"),
          to: `/report`,
        },
        {
          display: t("SIDEBAR.PRODUCTS"),
          to: `/product`,
        },
        {
          display: t("SIDEBAR.CRYPTO"),
          to: `/crypto`,
        },
      ],
    },
  ];

  useEffect(() => {
    let address = "";
    sidebarNavItems.forEach((item) => {
      item.children.forEach((child) => {
        if (location.pathname.includes(child.to)) {
          address = child.display;
        }
      });
    });
    setActiveItem(address);
  }, []);

  const handleActiveItem = (url: string, display: string) => {
    setActiveItem(display);
    if (url === "/mail") navigate(url);
    else navigate("/");
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
        <Box className={style.field_title}>{t("SIDEBAR.GENERAL")}</Box>

        {sidebarNavItems.map((item, index) => (
          <Accordion
            key={index}
            className={`${style.customAccordion}`}
            onChange={(e, expanded) => {
              if (expanded) setActiveIndex(index + 1);
              else setActiveIndex(0);
            }}
          >
            <AccordionSummary
              expandIcon={
                <MdKeyboardArrowDown className={style.sidebar_expandIcon} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={`${style.sidebar_item} ${
                activeIndex === item.selectIndex && style.active
              } `}
            >
              <Box className={style.sidebar_icon}>{item.icon}</Box>
              <Box className={style.sidebar_text}>{item.display}</Box>
            </AccordionSummary>
            <AccordionDetails>
              {item.children.map((child) => (
                <Box
                  sx={{ paddingLeft: "23px" }}
                  className={`${style.accordion_item} ${
                    activeItem === child.display && style.active_accordion_item
                  }  `}
                  onClick={() => handleActiveItem(child.to, child.display)}
                >
                  <Box className={style.accordion_dot}></Box>
                  <Box className={style.accordion_text}>{child.display}</Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
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
