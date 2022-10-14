import { Typography, Box, IconButton } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";

interface TableToolbarProps {
  numSelected: number;
  numberOfProject: number;
}
export default function TableToolBar(props: TableToolbarProps) {
  const { numSelected, numberOfProject } = props;
  return (
    <Box>
      {numSelected > 0 ? (
        <Typography fontSize="14px" color="#223354B3">
          Bulk actions:
        </Typography>
      ) : (
        <Typography fontSize="14px" color="#223354B3">
          Showing:{" "}
          <span style={{ fontWeight: "600" }}>{numberOfProject} projects</span>
        </Typography>
      )}
      {numSelected > 0 ? (
        <IconButton>
          <HiDotsVertical />
        </IconButton>
      ) : (
        ""
      )}
    </Box>
  );
}
