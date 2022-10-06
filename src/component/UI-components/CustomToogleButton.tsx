import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";

export const CustomToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.MuiToggleButton-root:hover": {
    color: "white",
    backgroundColor: "#5569ff",
  },
  "&.MuiToggleButton-root ": {
    color: "#5569ff",
    borderRadius: "10px",
  },
});
