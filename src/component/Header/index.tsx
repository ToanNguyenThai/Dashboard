import { useState } from "react";
import { useTranslation } from "react-i18next";

import avatar from "../../assets/img/avatar.jpg";
import uk from "../../assets/img/uk.webp";
import vn from "../../assets/img/vn.webp";
import germany from "../../assets/img/germany.png";
import spain from "../../assets/img/spain.png";
import france from "../../assets/img/france.png";

import { Box, Dialog } from "@mui/material";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { HiBell } from "react-icons/hi";
import { BiConversation } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { loginActions } from "../../redux/slice/login";

import { CustomWidthTooltip } from "../UI-components/CustomWidthTooltip";
import Dashboard from "./Modal/Dashboard";
import Language from "./Modal/Language";
import Profile from "./Modal/Profile";
import MegaMenu from "./Modal/MegaMenu";
import Messenger from "./Modal/Messenger";
import Notification from "./Modal/Notification";
import Search from "./Modal/Search";

import {
  TransitionSlideDown,
  notiTransition,
  megaTransition,
  profileTransition,
  langTransition,
  messTransition,
  dashboardTransition,
} from "../UI-components/Transition";

import style from "./header.module.css";

export type languageType = {
  id: number;
  name: string;
  type: string;
  flag: string;
};

export default function Header() {
  const [openDashboard, setOpenDashboard] = useState(false);
  const handleOpenDashboard = () => setOpenDashboard(true);
  const handleCloseDashboard = () => setOpenDashboard(false);

  const [openProfile, setOpenProfile] = useState(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);

  const [openLanguage, setOpenLanguage] = useState(false);
  const handleOpenLanguage = () => setOpenLanguage(true);
  const handleCloseLanguage = () => setOpenLanguage(false);

  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const handleOpenMegaMenu = () => setOpenMegaMenu(true);
  const handleCloseMegaMenu = () => setOpenMegaMenu(false);

  const [openMessenger, setOpenMessenger] = useState(false);
  const handleOpenMessenger = () => setOpenMessenger(true);
  const handleCloseMessenger = () => setOpenMessenger(false);

  const [openNotification, setOpenNotification] = useState(false);
  const handleOpenNotification = () => setOpenNotification(true);
  const handleCloseNotification = () => setOpenNotification(false);

  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);

  const [flag, setFlag] = useState(uk);

  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const languageItem = [
    {
      id: 1,
      name: t("LANG.EN"),
      type: "en",
      flag: uk,
    },
    {
      id: 2,
      name: t("LANG.VN"),
      type: "vn",
      flag: vn,
    },

    {
      id: 3,
      name: t("LANG.GERMANY"),
      type: "en",
      flag: germany,
    },

    {
      id: 4,
      name: t("LANG.SPAIN"),
      type: "en",
      flag: spain,
    },

    {
      id: 5,
      name: t("LANG.FRANCE"),
      type: "en",
      flag: france,
    },
  ];

  const signOut = () => {
    dispatch(loginActions.logout());
  };

  const handleChangeLanguage = (lang: languageType) => {
    i18n.changeLanguage(lang.type);
    setFlag(lang.flag);
    handleCloseLanguage();
  };

  return (
    <>
      <Box
        sx={{
          width: "calc(100% - 290px);",
          height: "80px",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          marginLeft: "290px",
          boxShadow:
            "rgb(34 51 84 / 20%) 0px 2px 8px -3px, rgb(34 51 84 / 10%) 0px 5px 22px -4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          paddingRight: "0",
          zIndex: "10",
        }}
      >
        <Box className={style.leftContainer}>
          <CustomWidthTooltip title="Search" arrow placement="bottom">
            <Box onClick={handleOpenSearch} className={style.searchIcon}>
              <MdSearch fontSize="20px" />
            </Box>
          </CustomWidthTooltip>
          <Box className={style.separate}></Box>
          <Box onClick={handleOpenMegaMenu} className={style.headerOption}>
            Mega menu
            <MdKeyboardArrowDown
              style={{
                transform: "translate3d(8px,1px, 0 )",
              }}
              fontSize="17px"
            ></MdKeyboardArrowDown>
          </Box>
          <Box onClick={handleOpenDashboard} className={style.headerOption}>
            Dashboards
            <MdKeyboardArrowDown
              style={{
                transform: "translate3d(8px,1px, 0 )",
              }}
              fontSize="17px"
            ></MdKeyboardArrowDown>
          </Box>
        </Box>
        <Box className={style.rightContainer}>
          <CustomWidthTooltip title="Notifications" arrow placement="bottom">
            <Box
              onClick={handleOpenNotification}
              sx={{
                backgroundColor: "#edf0ff",
              }}
              className={style.rightContainer_icon}
            >
              <HiBell fontSize="22px" color="#5569ff"></HiBell>
              <Box className={style.greendot}></Box>
            </Box>
          </CustomWidthTooltip>
          <CustomWidthTooltip
            title="Language Switcher"
            arrow
            placement="bottom"
          >
            <Box
              sx={{
                backgroundColor: "#fee8ec",
                width: "38px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
              className={style.rightContainer_icon}
              onClick={handleOpenLanguage}
            >
              <img style={{ width: "65%" }} src={flag}></img>
            </Box>
          </CustomWidthTooltip>

          <CustomWidthTooltip title="Messengers" arrow placement="bottom">
            <Box
              onClick={handleOpenMessenger}
              sx={{
                backgroundColor: "#fef6e8",
              }}
              className={style.rightContainer_icon}
            >
              <BiConversation fontSize="22px" color="#ffa319"></BiConversation>
              <Box className={style.orangedot}></Box>
            </Box>
          </CustomWidthTooltip>

          <img
            src={avatar}
            onClick={handleOpenProfile}
            className={style.avatar}
          />
        </Box>
      </Box>
      <Dialog
        open={openDashboard}
        onClose={handleCloseDashboard}
        TransitionComponent={dashboardTransition}
        className="modalBackdrop"
      >
        <Dashboard></Dashboard>
      </Dialog>
      <Dialog
        open={openProfile}
        onClose={handleCloseProfile}
        TransitionComponent={profileTransition}
        className="modalBackdrop"
      >
        <Profile signOut={signOut}></Profile>
      </Dialog>

      <Dialog
        open={openLanguage}
        onClose={handleCloseLanguage}
        TransitionComponent={langTransition}
        className="modalBackdrop"
      >
        <Language
          languageItem={languageItem}
          flag={flag}
          handleChangeLanguage={handleChangeLanguage}
        ></Language>
      </Dialog>

      <Dialog
        open={openMegaMenu}
        onClose={handleCloseMegaMenu}
        TransitionComponent={megaTransition}
        className="modalBackdrop"
      >
        <MegaMenu></MegaMenu>
      </Dialog>

      <Dialog
        open={openMessenger}
        onClose={handleCloseMessenger}
        TransitionComponent={messTransition}
        className="modalBackdrop"
      >
        <Messenger></Messenger>
      </Dialog>

      <Dialog
        open={openNotification}
        onClose={handleCloseNotification}
        TransitionComponent={notiTransition}
        className="modalBackdrop"
      >
        <Notification></Notification>
      </Dialog>

      <Dialog
        open={openSearch}
        onClose={handleCloseSearch}
        className="modalBackdrop"
        TransitionComponent={TransitionSlideDown}
      >
        <Search></Search>
      </Dialog>
    </>
  );
}
