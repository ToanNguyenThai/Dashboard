import {
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Avatar,
  AvatarGroup,
  Box,
} from "@mui/material";
import { CustomWidthTooltip } from "../../../UI-components/CustomWidthTooltip";
import { CustomLinearProgress } from "../../../UI-components/CustomLinearProgress";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ProjectState } from "../../../../types/types";

import style from "../../projects.module.css";

interface TableViewProps {
  row: ProjectState;
  handleCheck: any;
  isItemSelected: boolean;
  handleOpenDelete: any;
}

export default function TableView(props: TableViewProps) {
  const { row, handleCheck, isItemSelected, handleOpenDelete } = props;
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
        <Typography fontSize="14px" color="#223354" fontWeight="600">
          {row.title}
        </Typography>
      </TableCell>
      <TableCell className={style.rowItem} padding="none" align="left">
        {row?.tags?.map((item) => (
          <a href="#">{item.title},</a>
        ))}
      </TableCell>
      <TableCell className={style.rowItem} padding="none" align="left">
        Started: {row.dueDate}
      </TableCell>
      <TableCell className={style.rowItem} padding="none" align="left">
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
      <TableCell className={style.rowItem} padding="none" align="left">
        <Box
          sx={{
            minWidth: "175px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "70%", mr: 1 }}>
            <CustomLinearProgress variant="determinate" value={row.progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="#223354B3">
              {row.progress}%
            </Typography>
          </Box>
        </Box>
      </TableCell>

      <TableCell className={style.rowItem} padding="none" align="left">
        {renderStatus(row.status)}
      </TableCell>
      <TableCell className={style.rowItem} padding="none" align="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomWidthTooltip title="View" arrow placement="bottom">
            <Box className={style.icon}>
              <BsBoxArrowUpRight fontSize="19px" />
            </Box>
          </CustomWidthTooltip>
          <CustomWidthTooltip title="Delete" arrow placement="bottom">
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
}
