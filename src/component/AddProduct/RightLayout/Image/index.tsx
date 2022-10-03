import { Box, Typography } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { MdOutlineCloudUpload } from "react-icons/md";
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
        <input
          accept="image/*"
          id="messenger-upload-file"
          type="file"
          style={{ display: "none" }}
        ></input>
        <label
          htmlFor="messenger-upload-file"
          aria-label="Attach a file"
          className={style.uploadContainer}
        >
          <MdOutlineCloudUpload
            style={{ transform: "translateY(17px)" }}
            color="#5569ff "
            fontSize="28px"
          ></MdOutlineCloudUpload>
          <Typography fontSize="13px" color="#223354" fontWeight="500">
            Drag drop files here
          </Typography>
        </label>
      </Box>
    </PreviewCard>
  );
}
