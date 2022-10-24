import { Typography, Box, IconButton, TablePagination } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";

interface TableToolbarProps {
  dataLength: number;
  numSelected: number;
  numberOfProject: number;
  rowsPerPage: number;
  page: number;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
}
export default function TableToolBar(props: TableToolbarProps) {
  const {
    dataLength,
    numSelected,
    numberOfProject,
    rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {numSelected > 0 ? (
        <Typography fontSize="14px" color="#223354B3">
          Bulk actions:
        </Typography>
      ) : (
        <Typography fontSize="14px" color="#223354B3">
          Showing:{" "}
          <span style={{ fontWeight: "600", color: "#223354" }}>
            {dataLength} projects
          </span>
        </Typography>
      )}
      {numSelected > 0 ? (
        <IconButton>
          <HiDotsVertical />
        </IconButton>
      ) : (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={numberOfProject}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Box>
  );
}
