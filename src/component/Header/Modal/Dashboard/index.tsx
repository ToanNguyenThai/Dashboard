import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import style from "./modalDasboard.module.css";

import {
  MdLiveHelp,
  MdOutlineDashboardCustomize,
  MdPeopleAlt,
} from "react-icons/md";
import { TiFlowChildren } from "react-icons/ti";

const dashboardItem = [
  {
    id: 1,
    text: "Project",
    icon: <TiFlowChildren color="orange" fontSize="30px"></TiFlowChildren>,
    class: "first3option",
  },
  {
    id: 2,
    text: "Helpdesk",
    icon: <MdLiveHelp color="green" fontSize="30px"></MdLiveHelp>,
    class: "first3option",
  },
  {
    id: 3,
    text: "Dashboard",
    icon: (
      <MdOutlineDashboardCustomize
        color="#5569ff"
        fontSize="30px"
      ></MdOutlineDashboardCustomize>
    ),
    class: "first3option",
  },
  {
    id: 4,
    text: "Customers",
    icon: <MdPeopleAlt color="red" fontSize="30px"></MdPeopleAlt>,
    class: "lastoption",
  },
];

export default function Dashboard() {
  return (
    <Box className={style.modalContent}>
      <Typography
        variant="h6"
        textAlign="center"
        color="white"
        fontWeight="600"
      >
        Dashboards
      </Typography>
      <Typography variant="body1" textAlign="center" color="#b4bac2">
        This is just a menu example we've created
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {dashboardItem.map((item) => (
          <Box className={style.header_dashboard_item}>
            {item.icon}
            <Typography
              variant="body1"
              fontSize="15px"
              fontWeight="600"
              className={style[item.class]}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
