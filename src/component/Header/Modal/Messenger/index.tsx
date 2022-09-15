import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { MdMarkChatRead, MdSearch } from "react-icons/md";

import avatar from "../../../../assets/img/avatar.jpg";
import style from "./messenger.module.css";

const chatList = [
  {
    name: "Munroe Dacks",
    img: avatar,
  },
  {
    name: "Gunilla Canario",
    img: avatar,
  },
  {
    name: "Rowena Geistmann",
    img: avatar,
  },
  {
    name: "Ede Stoving",
    img: avatar,
  },
  {
    name: "Crissy Spere",
    img: avatar,
  },
];

export default function Messenger() {
  return (
    <Box className={style.messengerMenu}>
      <Box className={style.messenger_header}>
        <Box className={style.markAsRead}>
          <MdMarkChatRead color="#4d56ff"></MdMarkChatRead>
          <Typography
            variant="body1"
            fontSize="13px"
            fontWeight="600"
            color="#4d56ff"
            marginLeft="8px"
          >
            Mark all as seen
          </Typography>
        </Box>
        <Box className={style.roundedAvatar}>
          ET
          <Box className={style.redDot}></Box>
        </Box>
      </Box>

      <Box className={style.customTextField}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdSearch fontSize="25px" color="black" />
              </InputAdornment>
            ),
          }}
          placeholder="Search messages..."
        ></TextField>
      </Box>

      <Box className={style.chatList}>
        {chatList.map((item) => (
          <Box className={style.chatItem}></Box>
        ))}
      </Box>

      <Box className={style.messenger_footer}>
        <Box className={style.messenger_footer_btn}>View all participants</Box>
      </Box>
    </Box>
  );
}
