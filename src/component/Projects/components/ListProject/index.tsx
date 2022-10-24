import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  AvatarGroup,
  Avatar,
  Dialog,
} from "@mui/material";

import TableHeader from "./TableHeader";
import TableToolBar from "./TableToolBar";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { CustomLinearProgress } from "../../../UI-components/CustomLinearProgress";
import { CustomWidthTooltip } from "../../../UI-components/CustomWidthTooltip";
import {
  projectSelectors,
  projectActions,
} from "../../../../redux/slice/project";
import { ProjectState } from "../../../../types/types";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

import DeleteModal from "./DeleteModal";
import { TransitionSlideDown } from "../../../UI-components/Transition";
import Toast from "../../../UI-components/Toast";

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
interface TableSearch {
  searchValue: string;
  projectStatusFilter: string;
}
export default function ListProject(props: TableSearch) {
  const { searchValue, projectStatusFilter } = props;
  const prjs: ProjectState[] = useSelector(projectSelectors.selectProject);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [data, setData] = useState<ProjectState[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [deleteId, setDeleteId] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [numberOfCurrentRow, setnumberOfCurrentRow] = useState(0);
  const handleOpenDelete = (id: string) => {
    setOpenDelete(true);
    setDeleteId(id);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  useEffect(() => {
    setTimeout(() => {
      setData(prjs);
    }, 2000);
  }, [prjs]);

  useEffect(() => {
    if (searchValue.length > 0 && projectStatusFilter.length === 0) {
      let searchData = prjs.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) === true
      );
      setData(searchData);
    } else if (
      projectStatusFilter.length > 0 &&
      projectStatusFilter !== "All" &&
      searchValue.length === 0
    ) {
      let searchData = prjs.filter((item) =>
        item.status.includes(projectStatusFilter)
      );
      setData(searchData);
    } else if (
      searchValue.length > 0 &&
      projectStatusFilter.length > 0 &&
      projectStatusFilter !== "All"
    ) {
      let searchData = prjs.filter(
        (item) =>
          item.status.includes(projectStatusFilter) &&
          item.title.toLowerCase().includes(searchValue.toLowerCase()) === true
      );
      setData(searchData);
    } else setData(prjs);
  }, [searchValue, projectStatusFilter]);

  useEffect(() => {
    let renderData = data.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    setnumberOfCurrentRow(renderData.length);
  }, [data, rowsPerPage, page]);
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
  const isSelected = (id: string) => selected.indexOf(id) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - prjs.length) : 0;

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const deleteMultipleProject = () => {
    dispatch(projectActions.deleteMultipleProject(selected));
    Toast("success", "The projects has been deleted successfully", "top-right");
  };
  return (
    <PreviewCard sx={{ marginTop: "30px" }}>
      <Box sx={{ padding: "18px" }}>
        <TableToolBar
          dataLength={numberOfCurrentRow}
          numSelected={selected.length}
          numberOfProject={prjs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handleChangePage}
          deleteMultipleProject={deleteMultipleProject}
        ></TableToolBar>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={prjs.length}
          />
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onChange={(event) => handleCheck(event, row.id)}
                      />
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      component="th"
                      scope="row"
                      padding="none"
                    >
                      <Typography
                        fontSize="14px"
                        color="#223354"
                        fontWeight="600"
                      >
                        {" "}
                        {row.title}
                      </Typography>
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      {row?.tags?.map((item) => (
                        <a href="#">{item.title},</a>
                      ))}
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      Started: {row.dueDate}
                    </TableCell>
                    <TableCell
                      className={style.rowItem}
                      padding="none"
                      align="left"
                    >
                      <Box sx={{ display: "flex" }}>
                        <AvatarGroup
                          sx={{
                            flexDirection: "row-reverse",
                            justifyContent: "flex-start",
                          }}
                          max={3}
                        >
                          {row?.members?.map((item, index) => (
                            <CustomWidthTooltip
                              title={item.name}
                              arrow
                              placement="top"
                              key={index}
                            >
                              <Avatar alt={item.name} src={item.img} />
                            </CustomWidthTooltip>
                          ))}
                        </AvatarGroup>
                      </Box>
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
                            onClick={() => handleOpenDelete(row.id)}
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
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={style.footer_pagination}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={prjs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        className="modalBackdrop"
        TransitionComponent={TransitionSlideDown}
      >
        <DeleteModal
          deleteId={deleteId}
          close={handleCloseDelete}
        ></DeleteModal>
      </Dialog>
    </PreviewCard>
  );
}
