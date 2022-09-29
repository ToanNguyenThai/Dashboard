import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
export const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#5569ff"),
  backgroundColor: "#5569ff",
  "&:hover": {
    backgroundColor: "#4454cc",
  },
}));
