import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  MdInbox,
  MdOutbox,
  MdFavorite,
  MdDrafts,
  MdDelete,
} from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { emailSelectors } from "../../../../redux/slice/email";
import { Email } from "../EmailList";
import style from "./sidemenu.module.css";

export default function SideMenu() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const email: Email[] = useSelector(emailSelectors.selectEmail);

  const [activeIndex, setActiveIndex] = useState(0);
  const sideMenuItems = [
    {
      type: "inbox",
      display: t("MAILBAR.INBOX"),
      icon: <MdInbox></MdInbox>,
      selectIndex: 0,
      color: "#5569ff",
    },
    {
      type: "outbox",
      display: t("MAILBAR.OUTBOX"),
      icon: <MdOutbox></MdOutbox>,
      selectIndex: 1,
      color: "#5569ff",
    },
    {
      type: "favourites",
      display: t("MAILBAR.FAV"),
      icon: <MdFavorite></MdFavorite>,
      selectIndex: 2,
      color: "#5569ff",
    },
    {
      type: "drafts",
      display: t("MAILBAR.DRAFTS"),
      icon: <MdDrafts></MdDrafts>,
      selectIndex: 3,
      color: "#5569ff",
    },

    {
      type: "deleted",
      display: t("MAILBAR.DEL"),
      icon: <MdDelete></MdDelete>,
      selectIndex: 4,
      color: "#5569ff",
    },
    {
      type: "important",
      display: t("MAILBAR.IMPORTANT"),
      icon: <FaTag></FaTag>,
      selectIndex: 5,
      color: "#57ca22",
    },
    {
      type: "work",
      display: t("MAILBAR.WORK"),
      icon: <FaTag></FaTag>,
      selectIndex: 6,
      color: "#ffa319",
    },
    {
      type: "task",
      display: t("MAILBAR.TASK"),
      icon: <FaTag></FaTag>,
      selectIndex: 7,
      color: "#33c2ff",
    },
    {
      type: "business",
      display: t("MAILBAR.BUSINESS"),
      icon: <FaTag></FaTag>,
      selectIndex: 8,
      color: "#ff1943",
    },
  ];
  const handleActiveItem = (index: number, type: string) => {
    let activeItem: number = 0;
    sideMenuItems.forEach((item) => {
      if (item.selectIndex === index) activeItem = index;
    });
    setActiveIndex(activeItem);
    navigate(`${type}`);
  };

  const getNumberByType = (type: string) => {
    let count: number = 0;
    if (type !== "deleted") {
      email.forEach((item) => {
        if (item[type as keyof Email] === true && !item.deleted) count++;
      });
    } else {
      email.forEach((item) => {
        if (item.deleted) count++;
      });
    }

    return count;
  };
  useEffect(() => {
    navigate(`inbox`);
  }, []);
  return (
    <Box
      sx={{
        width: "280px",
        backgroundColor: "#f3f6fa",
        height: "calc(100vh - 80px)",
        padding: "25px",
        position: "fixed",
        left: "300px",
        top: "80px",
      }}
    >
      <Button
        variant="contained"
        sx={{
          borderRadius: "10px",
          backgroundColor: "#5569ff",
          width: "100%",
          paddingTop: "10px",
          paddingBottom: "8px",
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "none",
        }}
      >
        {t("MAILBAR.COMPOSE")}
      </Button>
      <Box
        sx={{
          marginTop: "30px",
        }}
      >
        {sideMenuItems.map((item, index: number) => (
          <Box onClick={() => handleActiveItem(index, item.type)} key={index}>
            <Box
              className={`${style.sidebar_item} ${
                activeIndex === index ? style.active : ""
              }`}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box className={style.sidebar_icon} sx={{ color: item.color }}>
                  {item.icon}
                </Box>
                <Box className={style.sidebar_text}>{item.display}</Box>
              </Box>
              {getNumberByType(item.type) !== 0 && (
                <Box className={style.sidebar_number}>
                  {getNumberByType(item.type)}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
