import { Checkbox, Typography, Avatar, AvatarGroup, Box } from "@mui/material";
import { CustomWidthTooltip } from "../../../UI-components/CustomWidthTooltip";
import { CustomLinearProgress } from "../../../UI-components/CustomLinearProgress";
import { CustomButton } from "../../../UI-components/CustomButton";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ProjectState } from "../../../../types/types";

import { PreviewCard } from "../../../UI-components/PreviewCard";

import style from "../../projects.module.css";

interface GridViewProps {
  row: ProjectState;
  handleCheck: any;
  isItemSelected: boolean;
  handleOpenDelete: any;
  index: number;
}

export default function GridView(props: GridViewProps) {
  const { row, handleCheck, isItemSelected, handleOpenDelete, index } = props;
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
    <PreviewCard sx={{ width: "495px" }}>
      <Box className={style.cardHeader}>
        <Typography fontWeight="600" fontSize="14px" color="#223354">
          Tags:
          {row?.tags?.map((item) => (
            <a style={{ fontWeight: "500", color: "#5569FF" }} href="#">
              {" "}
              {item.title},
            </a>
          ))}
        </Typography>
        <Checkbox
          color="primary"
          checked={isItemSelected}
          onChange={(event) => handleCheck(event, row.id)}
        />
      </Box>
      <img src={`https://picsum.photos/495/180?random=${index}`}></img>
      <Box className={style.cardInfo}>
        {renderStatus(row.status)}
        <Typography
          fontSize="16px"
          fontWeight="600"
          color="#223354"
          marginTop="10px"
        >
          {row.title}
        </Typography>
        <Typography
          fontSize="15px"
          fontWeight="500"
          color="#223354B3"
          marginTop="10px"
        >
          {row.description}
        </Typography>
        <Typography
          fontSize="15px"
          fontWeight="500"
          color="#223354B3"
          marginTop="20px"
        >
          Started:
        </Typography>
        <Typography fontSize="14px" fontWeight="600" color="#223354">
          {row.dueDate}
        </Typography>
        <Box
          sx={{
            minWidth: "175px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", mr: 1 }}>
            <CustomLinearProgress variant="determinate" value={row.progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="#223354B3">
              {row.progress}%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={style.separate}></Box>
      <Box className={style.cardFooter}>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomButton className={style.editBtn}>Edit</CustomButton>
          <CustomWidthTooltip title="Delete" arrow placement="bottom">
            <Box
              onClick={() => handleOpenDelete(row.id)}
              className={`${style.icon} ${style.deleteIcon_grid}`}
            >
              <FaRegTrashAlt fontSize="19px" color="#ff4769" />
            </Box>
          </CustomWidthTooltip>
        </Box>
      </Box>
    </PreviewCard>
  );
}
