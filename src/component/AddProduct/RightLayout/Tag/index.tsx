import { Box, Typography, Chip, Stack } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { MdCancel } from "react-icons/md";
import style from "../rightlayout.module.css";
export default function Tag() {
  const handleDelete = () => {
    console.log("abc");
  };
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
          Product Tags
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "18px",

          borderTop: "1px solid #d5d8dc",
        }}
      >
        <Stack sx={{ marginBottom: "15px" }} direction="row" spacing={3}>
          <Chip
            label="new"
            variant="outlined"
            deleteIcon={<MdCancel color="#ff5e7b" />}
            onDelete={handleDelete}
          />
          <Chip
            label="fresh"
            variant="outlined"
            deleteIcon={<MdCancel color="#ff5e7b" />}
            onDelete={handleDelete}
          />
        </Stack>

        <Stack sx={{ marginBottom: "15px" }} direction="row" spacing={3}>
          <Chip
            label="electronics"
            variant="outlined"
            deleteIcon={<MdCancel color="#ff5e7b" />}
            onDelete={handleDelete}
          />
          <Chip
            label="computer"
            variant="outlined"
            deleteIcon={<MdCancel color="#ff5e7b" />}
            onDelete={handleDelete}
          />
        </Stack>
        <Stack direction="row" spacing={3}>
          <Chip
            label="software"
            variant="outlined"
            deleteIcon={<MdCancel color="#ff5e7b" />}
            onDelete={handleDelete}
          />
        </Stack>
      </Box>
    </PreviewCard>
  );
}
