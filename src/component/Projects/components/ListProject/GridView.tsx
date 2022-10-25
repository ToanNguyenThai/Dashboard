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

import { PreviewCard } from "../../../UI-components/PreviewCard";

import style from "../../projects.module.css";

interface GridViewProps {
  row: ProjectState;
  handleCheck: any;
  isItemSelected: boolean;
  handleOpenDelete: any;
}

export default function GridView(props: GridViewProps) {
  const { row, handleCheck, isItemSelected, handleOpenDelete } = props;

  return <PreviewCard>GridView</PreviewCard>;
}
