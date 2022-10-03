import { useState } from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import { MdCancel } from "react-icons/md";
import style from "../rightlayout.module.css";
const tagList = ["new", "fresh", "electronics", "computer", "software"];

export default function Tag() {
  const [tags, setTags] = useState(tagList);
  const handleDelete = (deletedTag: string) => {
    let curr_tag = tags.filter((tag) => tag !== deletedTag);
    setTags(curr_tag);
  };
  return (
    <PreviewCard sx={{ marginTop: "25px" }}>
      <Box
        sx={{
          height: "52px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="600" color="#223354" fontSize="15px">
          Product Tags
        </Typography>
      </Box>
      <>
        {tags.length > 0 ? (
          <Box
            sx={{
              padding: "18px",
              display: "flex",
              flexWrap: "wrap",
              borderTop: "1px solid #d5d8dc",
            }}
          >
            {tags.map((item) => (
              <Chip
                label={item}
                variant="outlined"
                deleteIcon={<MdCancel color="#ff5e7b" />}
                onDelete={() => handleDelete(item)}
                sx={{ margin: "9px" }}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              padding: "36px",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #d5d8dc",
            }}
          >
            <Typography fontWeight="500" color="#223354B3" fontSize="15px">
              There are no product tags
            </Typography>
          </Box>
        )}
      </>
    </PreviewCard>
  );
}
