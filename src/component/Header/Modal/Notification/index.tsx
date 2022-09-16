import { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import Report from "./component/Report";
import Task from "./component/Task";
import Timeline from "./component/Timeline";
import style from "./notification.module.css";

const headerNav = [
  { name: "timeline" },
  { name: "tasks" },
  { name: "reports" },
];

export default function Notification() {
  const [value, setValue] = useState("timeline");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const renderNav = () => {
    if (value === "timeline") return <Timeline></Timeline>;
    else if (value === "tasks") return <Task></Task>;
    else if (value === "reports") return <Report></Report>;
  };
  return (
    <Box className={style.notification}>
      <Box className={style.notiHeader}>
        <Box className={style.headerBG}>
          <Box className={style.greenOverlay}></Box>
          <Box className={style.text}>
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="700"
              color="white"
            >
              Notifications
            </Typography>
            <Typography
              variant="body1"
              fontSize="15px"
              fontWeight="500"
              color=" rgba(255, 255, 255, 0.7)"
            >
              You have
              <span style={{ color: "rgb(87, 202, 34)", fontWeight: "700" }}>
                {" "}
                483{" "}
              </span>
              new messages
            </Typography>
          </Box>
        </Box>
        <Box className={style.headerNav}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                background: "#5569ff",
                height: 40,
                color: "white",
                borderRadius: "6px",
              },
            }}
          >
            {headerNav.map((item) => (
              <Tab
                className={style.navItem}
                key={item.name}
                label={item.name}
                value={item.name}
              ></Tab>
            ))}
          </Tabs>
        </Box>
      </Box>
      <Box className={style.navItemContainer}>{renderNav()}</Box>
      <Box className={style.noti_footer}>
        <Box className={style.noti_footer_btn}>
          View All
          <AiOutlineArrowRight
            fontSize="17px"
            color="#5569ff"
            style={{ transform: "translate3d(10px, 1px, 0)" }}
          ></AiOutlineArrowRight>
        </Box>
      </Box>
    </Box>
  );
}
