import {
  Box,
  TextField,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styleTextfield } from "../../../../UI-components/CustomTextField";
import { CustomWidthTooltip } from "../../../../UI-components/CustomWidthTooltip";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import style from "../additionalinfor.module.css";
export default function Inventory() {
  return (
    <Box
      sx={{
        paddingBottom: "27px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          sx={styleTextfield}
          style={{ width: "45%" }}
          label="SKU"
          placeholder="Stock quantity here..."
        ></TextField>
        <CustomWidthTooltip
          title="This field help identify the current stocks"
          arrow
          placement="top"
        >
          <Box
            className={`${style.questionIcon} ${style.questionIcon_moveToLeft} `}
          >
            <HiOutlineQuestionMarkCircle
              fontSize="20px"
              color="#5569ff"
            ></HiOutlineQuestionMarkCircle>
          </Box>
        </CustomWidthTooltip>

        <TextField
          sx={styleTextfield}
          style={{ width: "48%" }}
          label="Stock status"
          select
        >
          <MenuItem>In stock</MenuItem>
          <MenuItem>Out of stock</MenuItem>
          <MenuItem>Back in stock soon</MenuItem>
        </TextField>
      </Box>
      <FormControlLabel
        sx={{ marginTop: "27px" }}
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
        label="Sold individually"
      />
      <Typography fontSize="15px" color="#223354B3">
        Enable this to only allow one of this item to be bought in a single
        order
      </Typography>
    </Box>
  );
}
