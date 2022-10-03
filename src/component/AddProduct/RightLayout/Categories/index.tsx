import React, { useState } from "react";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { CustomOutlineButton } from "../../../UI-components/CustomOutlineButton";
import { HiOutlinePencil } from "react-icons/hi";
export default function Categories() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={
          <span style={{ color: "#223354", fontSize: "14px" }}>Appliances</span>
        }
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#5569ff",
              },
            }}
            checked={checked[0]}
            onChange={handleChange2}
          />
        }
      />
      <FormControlLabel
        label={
          <span style={{ color: "#223354", fontSize: "14px" }}>
            Outdoor equipment
          </span>
        }
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#5569ff",
              },
            }}
            checked={checked[1]}
            onChange={handleChange3}
          />
        }
      />
    </Box>
  );
  return (
    <PreviewCard sx={{ marginTop: "25px" }}>
      <Box
        sx={{
          height: "52px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight="600" color="#223354" fontSize="15px">
          Categories
        </Typography>
        <CustomOutlineButton
          sx={{
            color: "#5569ff",
            padding: "3px 15px",
            textTransform: "unset",
            fontWeight: "600",
          }}
        >
          Add category
        </CustomOutlineButton>
      </Box>
      <Box
        sx={{
          padding: "18px",
          borderTop: "1px solid #d5d8dc",
        }}
      >
        <Box>
          <FormControlLabel
            label={
              <span style={{ color: "#223354", fontSize: "14px" }}>
                Electronics
              </span>
            }
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
                sx={{
                  "&.Mui-checked": {
                    color: "#5569ff",
                  },
                  "&.MuiCheckbox-indeterminate": {
                    color: "#5569ff",
                  },
                }}
              />
            }
          />
          {children}
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "&.Mui-checked": {
                  color: "#5569ff",
                },
              }}
            />
          }
          label={
            <span style={{ color: "#223354", fontSize: "14px" }}>
              Digital products
            </span>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                "&.Mui-checked": {
                  color: "#5569ff",
                },
              }}
            />
          }
          label={
            <span style={{ color: "#223354", fontSize: "14px" }}>
              Software memberships
            </span>
          }
        />
      </Box>
    </PreviewCard>
  );
}
