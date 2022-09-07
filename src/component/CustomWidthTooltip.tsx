import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
export const CustomWidthTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)({
  [`& .${tooltipClasses.tooltip}`]: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 18,
    paddingLeft: 18,
    backgroundColor: "#27365a",
    borderRadius: 10,
    fontSize: 13,
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#27365a",
  },
});
