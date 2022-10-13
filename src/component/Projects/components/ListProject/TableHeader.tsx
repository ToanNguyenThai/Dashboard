import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";
import { TableData } from "../ListProject";
interface TableHeaderProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    disablePadding: true,
    label: "NAME",
  },
  {
    id: "tags",

    disablePadding: true,
    label: "TAGS",
  },
  {
    id: "time",

    disablePadding: true,
    label: "TIME LEFT",
  },
  {
    id: "members",

    disablePadding: true,
    label: "MEMBERS",
  },
  {
    id: "progress",
    disablePadding: true,
    label: "PROGRESS",
  },
  {
    id: "status",
    disablePadding: true,
    label: "STATUS",
  },
  {
    id: "actions",
    disablePadding: true,
    label: "ACTIONS",
  },
];

export default function TableHeader(props: TableHeaderProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
