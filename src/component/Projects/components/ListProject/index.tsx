import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TablePagination,
  Box,
  Dialog,
} from "@mui/material";

import TableHeader from "./TableHeader";
import TableToolBar from "./TableToolBar";
import { PreviewCard } from "../../../UI-components/PreviewCard";

import {
  projectSelectors,
  projectActions,
} from "../../../../redux/slice/project";
import { ProjectState } from "../../../../types/types";

import DeleteModal from "./DeleteModal";
import { TransitionSlideDown } from "../../../UI-components/Transition";
import Toast from "../../../UI-components/Toast";

import TableView from "./TableView";
import GridView from "./GridView";
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
  view: string;
}
export default function ListProject(props: TableSearch) {
  const { searchValue, projectStatusFilter, view } = props;
  const dispatch = useDispatch();

  const prjs: ProjectState[] = useSelector(projectSelectors.selectProject);

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
          {view === "list" && (
            <TableHeader
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={prjs.length}
            />
          )}

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);
                if (view === "list") {
                  return (
                    <TableView
                      row={row}
                      isItemSelected={isItemSelected}
                      handleOpenDelete={handleOpenDelete}
                      handleCheck={handleCheck}
                    ></TableView>
                  );
                } else
                  return (
                    <GridView
                      row={row}
                      isItemSelected={isItemSelected}
                      handleOpenDelete={handleOpenDelete}
                      handleCheck={handleCheck}
                    ></GridView>
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
