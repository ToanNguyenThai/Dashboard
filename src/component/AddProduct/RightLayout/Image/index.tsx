import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { PreviewCard } from "../../../UI-components/PreviewCard";
import {
  MdOutlineCloudUpload,
  MdCheck,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";
import style from "../rightlayout.module.css";

export default function Image() {
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
          Product Images
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "18px",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #d5d8dc",
        }}
      >
        <Box {...getRootProps()} className={style.drop_file_input}>
          <Box className={style.drop_file_input_label}>
            {!isDragActive && (
              <>
                <MdOutlineCloudUpload
                  style={{ transform: "translateY(17px)" }}
                  color="#5569ff "
                  fontSize="28px"
                ></MdOutlineCloudUpload>
                <Typography fontSize="13px" color="#223354" fontWeight="500">
                  Drag drop files here
                </Typography>
              </>
            )}
            {isDragAccept && (
              <>
                <Box className={style.acceptSign}>
                  <MdCheck color="white" fontSize="20px"></MdCheck>
                </Box>
                <Typography fontSize="13px" color="#223354" fontWeight="500">
                  Drop the files to start uploading
                </Typography>
              </>
            )}
            {isDragReject && (
              <>
                <Box className={style.rejectSign}>X</Box>
                <Typography fontSize="13px" color="#223354" fontWeight="500">
                  You cannot upload these file types
                </Typography>
              </>
            )}
          </Box>
          <input {...getInputProps()}></input>
        </Box>
      </Box>

      {file !== null && file !== undefined && (
        <Box
          sx={{
            padding: "18px",
            borderTop: "1px solid #d5d8dc",
          }}
        >
          <Box className={` ${style.uploadSuccess}`}>
            <MdOutlineCheckCircleOutline
              color="#94dd72"
              fontSize="22px"
            ></MdOutlineCheckCircleOutline>
            <Typography fontSize="14px" marginLeft="10px">
              You have uploaded <span style={{ fontWeight: "700" }}>1 </span>
              files!
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Typography fontSize="14px" color="#223354">
              {file?.name}
            </Typography>
            <Typography fontSize="14px" color="#223354" fontWeight="600">
              {file?.size} bytes
            </Typography>
          </Box>
        </Box>
      )}
    </PreviewCard>
  );
}
