import { Box, Typography, FormControlLabel, Switch } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { CustomOutlineButton } from "../../../UI-components/CustomOutlineButton";
import { HiOutlinePencil } from "react-icons/hi";
export default function Publish() {
  return (
    <PreviewCard>
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
          Publish
        </Typography>
        <CustomOutlineButton
          sx={{
            color: "#5569ff",
            padding: "5px 15px",
            textTransform: "unset",
            fontWeight: "600",
          }}
          startIcon={<HiOutlinePencil />}
        >
          Edit
        </CustomOutlineButton>
      </Box>
      <Box>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Virtual Product"
        />
      </Box>
    </PreviewCard>
  );
}
