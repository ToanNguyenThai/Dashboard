import { Box } from "@mui/material";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";
export default function AddProduct() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 80px)",
        backgroundColor: "#eff3f7",
      }}
    >
      <Box
        sx={{
          width: "75.5%",
          borderRight: "1px solid #d5d8dc",
          padding: "25px 35px 0 35px",
        }}
      >
        <LeftLayout />
      </Box>
      <Box sx={{ width: "24.5%", padding: "20px 20px 0 20px" }}>
        <RightLayout />
      </Box>
    </Box>
  );
}
