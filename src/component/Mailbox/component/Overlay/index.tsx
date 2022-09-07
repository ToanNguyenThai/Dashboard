import { Box } from "@mui/material";
export default function Overlay() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(5px)",
        zIndex: 999,
      }}
    ></Box>
  );
}
