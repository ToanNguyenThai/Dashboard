import Paper, { PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
export const PreviewCard = styled(Paper)<PaperProps>(() => ({
  borderRadius: "10px",
  boxShadow:
    "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px",
}));
