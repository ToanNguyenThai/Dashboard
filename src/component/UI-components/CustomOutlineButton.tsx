import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
export const CustomOutlineButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#5569ff"),
  border: "1px solid #aab4ff",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#edf0ff",
    border: "1px solid #5569ff",
  },
}));
