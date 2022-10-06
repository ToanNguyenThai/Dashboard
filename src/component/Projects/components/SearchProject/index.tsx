import { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Autocomplete,
  ToggleButtonGroup,
} from "@mui/material";

import { PreviewCard } from "../../../UI-components/PreviewCard";
import { styleTextfield } from "../../../UI-components/CustomTextField";
import { CustomToggleButton } from "../../../UI-components/CustomToogleButton";
import { MdSearch, MdListAlt, MdOutlineGridView } from "react-icons/md";

const projectTag = [
  { title: "Developement" },
  { title: "Design Project" },
  { title: "Marketing Research" },
  { title: "Software" },
];
const projectStatus = [
  { title: "All" },
  { title: "Not started" },
  { title: "Complete" },
  { title: "In Progress" },
];

export default function SearchProject() {
  const [view, setView] = useState<string | null>("list");

  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    setView(newView);
  };
  return (
    <PreviewCard sx={{ padding: "18px" }}>
      <TextField
        sx={styleTextfield}
        fullWidth
        placeholder="Search by project name..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdSearch fontSize="25px" color="black" />
            </InputAdornment>
          ),
        }}
      ></TextField>

      <Box
        sx={{
          display: "flex",
          marginTop: "37px",
          justifyContent: "space-between",
        }}
      >
        <Autocomplete
          sx={{ width: "50%" }}
          multiple
          id="tags-outlined"
          options={projectTag}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          aria-label="Tags"
          renderInput={(params) => (
            <TextField {...params} sx={styleTextfield} label="Tags" />
          )}
        />

        <Autocomplete
          sx={{ width: "22%" }}
          id="tags-outlined"
          options={projectStatus}
          getOptionLabel={(option) => option.title}
          defaultValue={projectStatus[0]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              sx={styleTextfield}
              label="Status"
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
        <ToggleButtonGroup
          sx={{ width: "22%", display: "flex", justifyContent: "flex-end" }}
          value={view}
          exclusive
          onChange={handleView}
          aria-label="text alignment"
        >
          <CustomToggleButton value="list">
            <MdListAlt fontSize="25px" />
          </CustomToggleButton>
          <CustomToggleButton value="grid">
            <MdOutlineGridView fontSize="25px" />
          </CustomToggleButton>
        </ToggleButtonGroup>
      </Box>
    </PreviewCard>
  );
}
