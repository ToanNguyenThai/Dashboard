import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TablePagination,
  Box,
} from "@mui/material";
import TableHeader from "./TableHeader";
import TableToolBar from "./TableToolBar";
import { PreviewCard } from "../../../UI-components/PreviewCard";

import { projectSelectors } from "../../../../redux/slice/project";
import { ProjectState } from "../../../../types/types";
export interface TableData {
  name: string;
  tags: string[];
  time: string;
  members: string[];
  progress: number;
  status: string;
  actions: any;
}
export default function ListProject() {
  const prjs = useSelector(projectSelectors.selectProject);
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState<ProjectState[]>([]);
  useEffect(() => {
    setData(prjs);
  }, [prjs]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n?.title);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  return (
    <PreviewCard sx={{ marginTop: "30px" }}>
      <Box sx={{ padding: "18px" }}>
        <TableToolBar numSelected={selected.length}></TableToolBar>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={data.length}
          />
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.title);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.title}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell padding="none" align="left">
                      {row.tags}
                    </TableCell>
                    <TableCell padding="none" align="left">
                      {row.dueDate}
                    </TableCell>
                    <TableCell padding="none" align="left">
                      {row.members}
                    </TableCell>
                    <TableCell padding="none" align="left">
                      {row.progress}
                    </TableCell>

                    <TableCell padding="none" align="left">
                      {row.status}
                    </TableCell>
                    <TableCell padding="none" align="left">
                      11
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </PreviewCard>
  );
}
