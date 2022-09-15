import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import avatar from "../../../../assets/img/avatar.jpg";
import { loginSelectors } from "../../../../redux/slice/login";
import { MdKeyboardArrowRight, MdLock } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import style from "./profile.module.css";

interface profileProps {
  signOut: any;
}
const options: ApexOptions = {
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },
  colors: ["#ff3b5f"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    /* remove bottom ruler */
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    /* remove small tooltip */
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    /* remove header of tooltip */
    x: {
      show: false,
    },
  },
};
export default function Profile({ signOut }: profileProps) {
  const user = useSelector(loginSelectors.selectAccount);
  const [state, setState] = useState({
    series: [
      {
        name: "Orders",
        data: [465, 564, 234, 576, 554, 338, 427, 348, 586, 254, 348],
      },
    ],
    options: options,
  });
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
            Lead Developer
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
      <Box className={style.chart}>
        <Box sx={{ display: "flex" }}>
          <BsCoin
            fontSize="35px"
            color="ffa319"
            style={{ marginLeft: "20px", transform: "translateY(3px)" }}
          ></BsCoin>
          <Box sx={{ marginLeft: "15px" }}>
            <Typography variant="h5" fontWeight="700">
              $14,264
            </Typography>
            <Typography variant="body1">total value</Typography>
          </Box>
        </Box>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={120}
        />
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
