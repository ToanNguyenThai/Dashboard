import { Box, TextField, MenuItem } from "@mui/material";
import { styleTextfield } from "../../../../UI-components/CustomTextField";

import style from "../additionalinfor.module.css";
export default function General() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <TextField
        sx={styleTextfield}
        className={style.general_textfield}
        label="Regular price"
        placeholder="Regular price here..."
      ></TextField>
      <TextField
        sx={styleTextfield}
        className={style.general_textfield}
        label="Sale price"
        placeholder="Sale title here..."
      ></TextField>

      <TextField
        className={style.general_textfield}
        sx={styleTextfield}
        label="Tax status"
        select
      >
        <MenuItem></MenuItem>
        <MenuItem>Tax status</MenuItem>
      </TextField>

      <TextField
        className={style.general_textfield}
        sx={styleTextfield}
        label="Tax class"
        select
      >
        <MenuItem></MenuItem>
        <MenuItem>Tax class</MenuItem>
      </TextField>
    </Box>
  );
}
