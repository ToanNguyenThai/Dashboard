import { useState } from "react";
import { motion } from "framer-motion";
import { Box, TextField, InputAdornment } from "@mui/material";
import { MdSearch } from "react-icons/md";

import WithoutValue from "./WithoutValue";
import WithValue from "./WithValue";

import style from "./search.module.css";

const search_trend = [
  {
    name: "Analytics dashboard",
    recent: true,
    saved: false,
  },
  {
    name: "Top navigation layout",
    recent: true,
    saved: false,
  },
  {
    name: "Hospital overview page",
    recent: false,
    saved: true,
  },
];

const searchList = {
  dashboard: [
    {
      name: "Automation UI",
      popular: false,
    },
    {
      name: "Banking Performance",
      popular: false,
    },
    {
      name: "Fitness Statistics",
      popular: false,
    },
    {
      name: "Tasks for today",
      popular: true,
    },
    {
      name: "Statistics dashboard",
      popular: true,
    },
    {
      name: "Monitoring admin",
      popular: true,
    },
    {
      name: "Banking interface",
      popular: true,
    },
  ],

  management: [
    {
      name: "Products Admin",
      popular: false,
    },
    {
      name: "Customers Database",
      popular: false,
    },
    {
      name: "Learning Center",
      popular: false,
    },
    {
      name: "Invoices Archive",
      popular: false,
    },
    {
      name: "Calendar",
      popular: true,
    },
    {
      name: "File manager",
      popular: true,
    },
    {
      name: "Products list",
      popular: true,
    },
    {
      name: "Recent orders",
      popular: true,
    },
  ],
  application: [
    {
      name: "Events Manager",
      popular: false,
    },
    {
      name: "Messenging Platform",
      popular: false,
    },
  ],
};

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <Box className={style.search}>
      <Box className={style.customTextField}>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdSearch fontSize="25px" color="black" />
              </InputAdornment>
            ),
            endAdornment: <Box className={style.esc}>esc</Box>,
          }}
          placeholder="Search terms here..."
        ></TextField>
      </Box>
      <Box className={style.searchBody}>
        {value.length === 0 ? (
          <WithoutValue
            search_trend={search_trend}
            searchList={searchList}
          ></WithoutValue>
        ) : (
          <WithValue searchList={searchList}></WithValue>
        )}
      </Box>
    </Box>
  );
}
