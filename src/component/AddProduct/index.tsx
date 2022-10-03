import { Box } from "@mui/material";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";
import style from "./addproduct.module.css";

export default function AddProduct() {
  return (
    <Box
      sx={{
        height: "calc(100% - 80px)",
        backgroundColor: "#eff3f7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <Box className={style.leftlayout}>
          <LeftLayout />
        </Box>
        <Box className={style.rightlayout}>
          <RightLayout />
        </Box>
      </Box>
    </Box>
  );
}
