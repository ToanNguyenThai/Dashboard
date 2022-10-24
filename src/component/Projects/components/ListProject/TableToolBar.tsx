import { Typography, Box, IconButton, TablePagination } from "@mui/material";
import { CustomButton } from "../../../UI-components/CustomButton";
import { HiDotsVertical } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import style from "../../projects.module.css";
interface TableToolbarProps {
  dataLength: number;
  numSelected: number;
  numberOfProject: number;
  rowsPerPage: number;
  page: number;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
  deleteMultipleProject: any;
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
    deleteMultipleProject,
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
          <CustomButton
            onClick={() => deleteMultipleProject()}
            className={style.bulkButton}
            startIcon={<FiTrash2 />}
          >
            Delete
          </CustomButton>
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
