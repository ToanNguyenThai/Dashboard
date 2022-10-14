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
  Typography,
} from "@mui/material";

import TableHeader from "./TableHeader";
import TableToolBar from "./TableToolBar";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { CustomLinearProgress } from "../../../UI-components/CustomLinearProgress";
import { CustomWidthTooltip } from "../../../UI-components/CustomWidthTooltip";
import { projectSelectors } from "../../../../redux/slice/project";
import { ProjectState } from "../../../../types/types";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import style from "../../projects.module.css";
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

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const renderStatus = (status: string) => {
    if (status === "Completed")
      return (
        <Box className={`${style.statusBox} ${style.complete}`}>{status}</Box>
      );
    else if (status === "Not started")
      return (
        <Box className={`${style.statusBox} ${style.notStarted}`}>{status}</Box>
      );
    else if (status === "In progress")
      return (
        <Box className={`${style.statusBox} ${style.inProgress}`}>{status}</Box>
      );
  };
  return (
    <PreviewCard sx={{ marginTop: "30px" }}>
      <Box sx={{ padding: "18px" }}>
        <TableToolBar
          numSelected={selected.length}
          numberOfProject={prjs.length}
        ></TableToolBar>
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
                        onChange={(event) => handleCheck(event, row.title)}
                      />
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      {row.tags}
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      {row.dueDate}
                      <br></br>
                      Started: October 10 2022
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      {/*    {row.members} */}
                      members
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      <Box
                        sx={{
                          minWidth: "175px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: "70%", mr: 1 }}>
                          <CustomLinearProgress
                            variant="determinate"
                            value={row.progress}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography variant="body2" color="#223354B3">
                            {row.progress}%
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      {renderStatus(row.status)}
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="center"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <CustomWidthTooltip
                          title="View"
                          arrow
                          placement="bottom"
                        >
                          <Box className={style.icon}>
                            <BsBoxArrowUpRight fontSize="19px" />
                          </Box>
                        </CustomWidthTooltip>
                        <CustomWidthTooltip
                          title="Delete"
                          arrow
                          placement="bottom"
                        >
                          <Box
                            /* onClick={() =>
                              dispatch(
                                emailActions.delete_single(thisEmail?.id)
                              )
                            } */
                            className={style.icon}
                          >
                            <FaRegTrashAlt fontSize="19px" />
                          </Box>
                        </CustomWidthTooltip>
                      </Box>
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
