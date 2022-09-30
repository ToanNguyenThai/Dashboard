import { Box, TextField, Typography, MenuItem } from "@mui/material";
import { styleTextfield } from "../../../../UI-components/CustomTextField";
import { CustomWidthTooltip } from "../../../../UI-components/CustomWidthTooltip";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

import style from "../additionalinfor.module.css";

export default function Shipping() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "27px",
        }}
      >
        <TextField
          sx={styleTextfield}
          style={{ width: "96.5%" }}
          label="Weight"
          value="12"
          InputProps={{
            endAdornment: <Typography>Kg</Typography>,
          }}
        ></TextField>
        <CustomWidthTooltip
          title="You have the weight units set to kilograms in your app settings"
          arrow
          placement="top"
        >
          <Box className={style.questionIcon}>
            <HiOutlineQuestionMarkCircle
              fontSize="20px"
              color="#5569ff"
            ></HiOutlineQuestionMarkCircle>
          </Box>
        </CustomWidthTooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "27px",
        }}
      >
        <TextField
          sx={styleTextfield}
          style={{ width: "47%" }}
          label="Length"
          InputProps={{
            endAdornment: <Typography>CM</Typography>,
          }}
        ></TextField>
        <TextField
          sx={styleTextfield}
          style={{ width: "47%" }}
          label="Width"
          InputProps={{
            endAdornment: <Typography>CM</Typography>,
          }}
        ></TextField>
      </Box>
      <TextField
        style={{ marginBottom: "27px" }}
        sx={styleTextfield}
        fullWidth
        label="Shipping class"
        select
      >
        <MenuItem></MenuItem>
        <MenuItem>No shipping class</MenuItem>
      </TextField>
    </Box>
  );
}
