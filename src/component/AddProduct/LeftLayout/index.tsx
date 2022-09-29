import ReactQuill from "react-quill";
import { Typography, Box, TextField } from "@mui/material";
import { CustomButton } from "../../UI-components/CustomButton";
import { PreviewCard } from "../../UI-components/PreviewCard";
import { MdOutlineArrowBack } from "react-icons/md";
import { styleTextfield } from "../../UI-components/CustomTextField";
import AdditionalInfor from "./AdditionalInfor";
import "react-quill/dist/quill.snow.css";
import style from "./leftlayout.module.css";
export default function LeftLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography fontWeight="600" fontSize="25px" color="#223354">
            Add new product
          </Typography>
          <Typography fontSize="15px" color="#223354B3">
            Fill in the fields below to create a new product
          </Typography>
        </Box>
        <CustomButton
          sx={{
            borderRadius: "10px",
            padding: "8px 20px",
            textTransform: "unset",
            fontWeight: "600",
          }}
          startIcon={<MdOutlineArrowBack />}
        >
          Go back to all products
        </CustomButton>
      </Box>
      <PreviewCard
        sx={{ padding: "25px", marginTop: "40px", marginBottom: "40px" }}
      >
        <TextField
          sx={styleTextfield}
          fullWidth
          placeholder="Project title here..."
        ></TextField>
        <ReactQuill className={style.editor} theme="snow" />
        <TextField
          sx={styleTextfield}
          fullWidth
          placeholder="Select project tags..."
        ></TextField>
      </PreviewCard>
      <AdditionalInfor></AdditionalInfor>
    </>
  );
}
