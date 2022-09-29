import { Typography, Box, TextField } from "@mui/material";
import { PreviewCard } from "../../UI-components/PreviewCard";
import { styleTextfield } from "../../UI-components/CustomTextField";
import style from "./leftlayout.module.css";
export default function AdditionalInfor() {
  return (
    <PreviewCard>
      <Box
        sx={{
          height: "52px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="600" color="#223354" fontSize="15px">
          Additional Informations
        </Typography>
      </Box>
    </PreviewCard>
  );
}
