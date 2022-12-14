import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineCloudUpload, MdCheck, MdCancel } from "react-icons/md";

import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Chip,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { styleTextfield } from "../../../UI-components/CustomTextField";
import { errorTextfield } from "../../../UI-components/CustomErrorTextField";
import { CustomButton } from "../../../UI-components/CustomButton";
import { CustomOutlineButton } from "../../../UI-components/CustomOutlineButton";
import { projectActions } from "../../../../redux/slice/project";
import { ProjectState } from "../../../../types/types";
import Toast from "../../../UI-components/Toast";
import avatar from "../../../../assets/img/avatar.jpg";

import "react-quill/dist/quill.snow.css";
import style from "../../projects.module.css";

const projectTag = [
  { title: "Developement" },
  { title: "Design Project" },
  { title: "Marketing Research" },
  { title: "Software" },
];
const memberTag = [
  {
    name: "Maren Lipshutz",
    img: avatar,
  },
  {
    name: "Zain Vetrovs",
    img: avatar,
  },
  {
    name: "Hanna Siphron",
    img: avatar,
  },
  {
    name: "Cristofer Aminoff",
    img: avatar,
  },
  {
    name: "Maria Calzoni",
    img: avatar,
  },
];
const status = ["Completed", "Not started", "In progress"];
interface newPrjProps {
  close: any;
}

export default function NewProject({ close }: newPrjProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [date, setDate] = useState<Dayjs | null>(dayjs("2022-01-01T21:11:54"));

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
  const handleChangeDate = (newDate: Dayjs | null) => {
    setDate(newDate);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, [isLoading]);
  const onSubmit = (data: any) => {
    setIsLoading(true);
    let newPrj: ProjectState = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      tags: data.tags,
      members: data.members,
      dueDate: date?.format("MMMM DD YYYY"),
      progress: Math.floor(Math.random() * 100),
      status: status[Math.floor(Math.random() * status.length)],
    };

    dispatch(projectActions.createProject(newPrj));

    setTimeout(() => {
      Toast(
        "success",
        "A new project has been created successfully",
        "top-right"
      );
      close();
    }, 2000);
  };

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

      <Box
        sx={{
          padding: "27px",
          borderTop: "1px solid #e8eaee",
          paddingBottom: "60px",
        }}
      >
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
                <Box className={style.customTextField} sx={{ width: "75%" }}>
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
            <Controller
              name={"description"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <ReactQuill
                  onChange={onChange}
                  value={value}
                  className={style.editor}
                  theme="snow"
                />
              )}
            />
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
              name={"tags"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  autoHighlight
                  onChange={(e, data) => onChange(data)}
                  value={value}
                  sx={{ width: "75%" }}
                  multiple
                  id="tags-outlined"
                  options={projectTag}
                  getOptionLabel={(option) => option.title}
                  aria-label="Tags"
                  renderInput={(params) => (
                    <TextField {...params} sx={styleTextfield} />
                  )}
                  renderTags={(option, getTagProps) => {
                    return option.map((item, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        sx={{ backgroundColor: "#e8eaee", marginRight: "9px" }}
                        label={item.title}
                        variant="outlined"
                        deleteIcon={<MdCancel color="#ff5e7b" />}
                      />
                    ));
                  }}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
              Members:
            </Typography>
            <Controller
              name={"members"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  autoHighlight
                  onChange={(e, data) => onChange(data)}
                  value={value}
                  sx={{ width: "75%" }}
                  multiple
                  id="tags-outlined"
                  options={memberTag}
                  getOptionLabel={(option) => option.name}
                  aria-label="Members"
                  renderOption={(props: object, option: any, state: object) => (
                    <Box sx={{ display: "flex" }} {...props}>
                      {option.title}
                      <img className={style.optionImg} src={option.img}></img>
                      <Typography color="#223354" fontSize="14px">
                        {option.name}
                      </Typography>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} sx={styleTextfield} />
                  )}
                  renderTags={(option, getTagProps) => {
                    return option.map((item, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        sx={{ backgroundColor: "#e8eaee", marginRight: "9px" }}
                        avatar={
                          <Avatar
                            sx={{ transform: "scale(0.8)" }}
                            alt={item.img}
                            src={item.img}
                          />
                        }
                        label={item.name}
                        variant="outlined"
                        deleteIcon={<MdCancel color="#ff5e7b" />}
                      />
                    ));
                  }}
                />
              )}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Typography
              width="22.5%"
              fontSize="14px"
              fontWeight="600"
              textAlign="right"
              marginRight="22px"
            >
              Due Date:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                toolbarPlaceholder="mm/dd/yyyy"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={handleChangeDate}
                renderInput={(params) => (
                  <TextField
                    sx={styleTextfield}
                    style={{ width: "31%" }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Typography
              width="22.5%"
              fontSize="14px"
              fontWeight="600"
              textAlign="right"
              marginRight="22px"
              visibility="hidden"
            >
              Due Date:
            </Typography>
            <Box sx={{ display: "flex" }}>
              <CustomButton
                onClick={handleSubmit(onSubmit)}
                className={style.createBtn}
                disabled={isLoading}
              >
                {isLoading && (
                  <CircularProgress sx={{ marginRight: "10px" }} size={20} />
                )}
                Create Project
              </CustomButton>
              <CustomOutlineButton
                onClick={() => close()}
                className={style.cancelBtn}
              >
                Cancel
              </CustomOutlineButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
