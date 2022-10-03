import { Box, Typography, FormControlLabel, Switch } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { CustomOutlineButton } from "../../../UI-components/CustomOutlineButton";
import { CustomButton } from "../../../UI-components/CustomButton";
import { HiOutlinePencil } from "react-icons/hi";
import style from "../rightlayout.module.css";
export default function Image() {
  return (
    <PreviewCard sx={{ marginTop: "25px" }}>
      <Box
        sx={{
          height: "52px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="600" color="#223354" fontSize="15px">
          Product Images
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "18px",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #d5d8dc",
        }}
      >
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={<span style={{ fontSize: "14px" }}>Virtual Product</span>}
        />
      </Box>
      <Box
        sx={{
          padding: "18px",
          borderTop: "1px solid #d5d8dc",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography fontSize="14px" color="#223354" width="110px">
            Status
          </Typography>
          <Typography fontSize="14px" fontWeight="600" color="#223354">
            Draft
          </Typography>
        </Box>

        <Box sx={{ display: "flex", paddingTop: "8px" }}>
          <Typography fontSize="14px" color="#223354" width="110px">
            Visibility
          </Typography>
          <Typography fontSize="14px" fontWeight="600" color="#223354">
            Visible
          </Typography>
        </Box>

        <Box sx={{ display: "flex", paddingTop: "12px" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "110px" }}>
            <Box className={style.greenDot}></Box>
            <Typography fontSize="14px" color="#223354" paddingLeft="5px">
              SEO Score
            </Typography>
          </Box>

          <Typography fontSize="14px" fontWeight="600" color="#223354">
            Good
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "18px",
          borderTop: "1px solid #d5d8dc",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomOutlineButton
            sx={{
              color: "#5569ff",
              padding: "4px 16px",
              textTransform: "unset",
              fontWeight: "500",
              width: "45%",
            }}
          >
            Preview
          </CustomOutlineButton>
          <CustomOutlineButton
            sx={{
              padding: "4px 16px",
              textTransform: "unset",
              fontWeight: "500",
              width: "45%",
            }}
            className={style.draftBtn}
          >
            Save draft
          </CustomOutlineButton>
        </Box>

        <CustomButton
          sx={{
            padding: "8px 20px",
            textTransform: "unset",
            fontWeight: "600",
            width: "100%",
            marginTop: "18px",
          }}
        >
          Publish now
        </CustomButton>
      </Box>
    </PreviewCard>
  );
}
