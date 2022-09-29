import { Box, Typography, TextField } from "@mui/material";
import { MdReply, MdEmojiEmotions, MdAttachFile } from "react-icons/md";

import { CustomWidthTooltip } from "../../../UI-components/CustomWidthTooltip";
import avatar from "../../../../assets/img/avatar.jpg";

import { styleTextfield } from "../../../UI-components/CustomTextField";
import style from "./emaildetails.module.css";
interface ReplyProps {
  recipient: string;
}
export default function Reply({ recipient }: ReplyProps) {
  return (
    <Box className={style.reply}>
      <img
        style={{ width: "40px", height: "40px", borderRadius: "100%" }}
        src={avatar}
      ></img>
      <Box className={style.replyBox}>
        <Typography fontSize="14px" color="#223354B3">
          Sending to:
          <span
            style={{ color: "#223354", fontWeight: "600", paddingLeft: "5px" }}
          >
            {recipient}
          </span>
        </Typography>
        <Box className={style.customTextField}>
          <TextField
            sx={styleTextfield}
            fullWidth
            placeholder="Write your reply here..."
          ></TextField>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          <Box className={style.replyBtn}>
            <MdReply fontSize="20px"></MdReply>
            <Typography fontSize="14px" fontWeight="700" marginLeft="5px">
              Reply
            </Typography>
          </Box>
          <Box className={style.separate}></Box>
          <CustomWidthTooltip title="Insert an emoji" arrow placement="top">
            <Box className={style.replyIcon}>
              <MdEmojiEmotions
                style={{ transform: "translateY(1px)" }}
                color="#ffc83d"
                fontSize="28px"
              ></MdEmojiEmotions>
            </Box>
          </CustomWidthTooltip>
          <CustomWidthTooltip title="Attach a file" arrow placement="top">
            <Box className={style.replyIcon}>
              <input
                accept="image/*"
                id="messenger-upload-file"
                type="file"
                style={{ display: "none" }}
              ></input>
              <label
                style={{ cursor: "pointer" }}
                htmlFor="messenger-upload-file"
                aria-label="Attach a file"
              >
                <MdAttachFile
                  style={{ transform: "translateY(1px)" }}
                  color="#5569ff "
                  fontSize="28px"
                ></MdAttachFile>
              </label>
            </Box>
          </CustomWidthTooltip>
        </Box>
      </Box>
    </Box>
  );
}
