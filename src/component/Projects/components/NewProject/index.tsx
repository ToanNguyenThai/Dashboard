import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import { styleTextfield } from "../../../UI-components/CustomTextField";
import { errorTextfield } from "../../../UI-components/CustomErrorTextField";
import { MdOutlineCloudUpload, MdCheck } from "react-icons/md";
import "react-quill/dist/quill.snow.css";

import style from "../../projects.module.css";
const projectTag = [
  { title: "Developement" },
  { title: "Design Project" },
  { title: "Marketing Research" },
  { title: "Software" },
];
export default function NewProject() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState<File | null>(null);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop: (acceptedFile) => {
      console.log(acceptedFile[0]);

      setFile(acceptedFile[0]);
    },
  });
  return (
    <Box className={style.newprj}>
      <Box sx={{ padding: "27px" }}>
        <Box>
          <Typography
            variant="h6"
            fontSize="16px"
            fontWeight="700"
            color="grey"
          >
            Create new project
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
            color={`rgba(34, 51, 84, 0.7)`}
          >
            Use this dialog window to add a new project
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: "27px", borderTop: "1px solid #e8eaee" }}>
        <form>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              width="22.5%"
              fontSize="14px"
              fontWeight="600"
              textAlign="right"
            >
              Project title:
            </Typography>
            <Controller
              rules={{
                required: true,
              }}
              name={"title"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Box sx={{ width: "75%" }}>
                  <TextField
                    autoFocus
                    sx={
                      errors.title !== undefined
                        ? errorTextfield
                        : styleTextfield
                    }
                    fullWidth
                    onChange={onChange}
                    value={value}
                    id="outlined-required"
                    error={errors.title !== undefined}
                    placeholder="Project title here..."
                    helperText={
                      errors?.title?.type == "required" && (
                        <span className={style.invalid}>
                          This field is required
                        </span>
                      )
                    }
                  />
                </Box>
              )}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <Typography
              width="22.5%"
              fontSize="14px"
              fontWeight="600"
              textAlign="right"
            >
              Description:
            </Typography>
            <ReactQuill className={style.editor} theme="snow" />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              width="22.5%"
              fontSize="14px"
              fontWeight="600"
              textAlign="right"
            >
              Tags:
            </Typography>
            <Controller
              rules={{
                required: true,
              }}
              name={"title"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  sx={{ width: "75%" }}
                  multiple
                  id="tags-outlined"
                  options={projectTag}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  aria-label="Tags"
                  renderInput={(params) => (
                    <TextField {...params} sx={styleTextfield} />
                  )}
                />
              )}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <Typography
              width="22.5%"
              fontSize="14px"
              fontWeight="600"
              textAlign="right"
            >
              Upload files:
            </Typography>
            <Box {...getRootProps()} className={style.drop_file_input}>
              <Box className={style.drop_file_input_label}>
                {!isDragActive && (
                  <>
                    <MdOutlineCloudUpload
                      style={{ transform: "translateY(17px)" }}
                      color="#5569ff "
                      fontSize="28px"
                    ></MdOutlineCloudUpload>
                    <Typography
                      fontSize="13px"
                      color="#223354"
                      fontWeight="500"
                    >
                      Drag drop files here
                    </Typography>
                  </>
                )}
                {isDragAccept && (
                  <>
                    <Box className={style.acceptSign}>
                      <MdCheck color="white" fontSize="20px"></MdCheck>
                    </Box>
                    <Typography
                      fontSize="13px"
                      color="#223354"
                      fontWeight="500"
                    >
                      Drop the files to start uploading
                    </Typography>
                  </>
                )}
                {isDragReject && (
                  <>
                    <Box className={style.rejectSign}>X</Box>
                    <Typography
                      fontSize="13px"
                      color="#223354"
                      fontWeight="500"
                    >
                      You cannot upload these file types
                    </Typography>
                  </>
                )}
              </Box>
              <input {...getInputProps()}></input>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
