import { useState } from "react";
import { Typography, Box, Tab, Tabs } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import General from "./components/General";
import Inventory from "./components/Inventory";
import Shipping from "./components/Shipping";
import style from "./additionalinfor.module.css";

const AdditionalNav = [
  { name: "general" },
  { name: "inventory" },
  { name: "shipping" },
];
export default function AdditionalInfor() {
  const [value, setValue] = useState("general");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const renderItem = () => {
    if (value === "general") return <General></General>;
    else if (value === "inventory") return <Inventory></Inventory>;
    else if (value === "shipping") return <Shipping></Shipping>;
  };
  return (
    <PreviewCard>
      <Box
        sx={{
          height: "52px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="600" color="#223354" fontSize="15px">
          Additional Informations
        </Typography>
      </Box>
      <Box className={style.AdditionalNav}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          // variant="fullWidth"
          TabIndicatorProps={{
            style: {
              background: "#5569ff",
              height: 40,
              color: "white",
              borderRadius: "6px",
            },
          }}
        >
          {AdditionalNav.map((item) => (
            <Tab
              className={style.navItem}
              key={item.name}
              label={item.name}
              value={item.name}
            ></Tab>
          ))}
        </Tabs>
      </Box>
      <Box className={style.AdditionalItem}>{renderItem()}</Box>
    </PreviewCard>
  );
}
