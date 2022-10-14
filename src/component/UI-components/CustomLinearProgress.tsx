import { LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomLinearProgress = styled(LinearProgress)({
  "&.MuiLinearProgress-root": {
    borderRadius: "20px",
    height: "6px",
  },
  "&.MuiLinearProgress-determinate": {
    backgroundColor: "#bec6ff",
  },
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "#5569ff",
  },
});
