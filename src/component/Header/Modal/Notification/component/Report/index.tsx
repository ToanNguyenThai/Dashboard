import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import style from "./report.module.css";
const options: ApexOptions = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },

  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
    },
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

    categories: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Last week",
      "Last month",
      "Last year",
      "Last quater",
    ],

    /* remove small tooltip */
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  colors: ["#999ebb", "#585d7f"],
};
export default function Report() {
  const [state, setState] = useState({
    series: [
      {
        name: "Net Profit",
        data: [2.3, 3.1, 4, 3.8, 5.1, 3.6, 4, 3.8, 5.1, 3.6, 0],
      },
      {
        name: "Net Lost",
        data: [2.1, 2.1, 3, 2.8, 4, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2],
      },
    ],
    options: options,
  });
  return (
    <Box className={style.report}>
      <Typography fontSize="16px" fontWeight="600" textAlign="center">
        Total Sales
      </Typography>
      <Typography fontSize="15px" color="#223354B3" textAlign="center">
        Total sales performance for last week
      </Typography>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={200}
      />
    </Box>
  );
}
