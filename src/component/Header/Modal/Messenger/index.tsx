import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { MdMarkChatRead, MdSearch } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
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
          <Box className={style.chatItem}>
            <Box className={style.userStatus}>
              <img src={item.img}></img>
              <Box
                sx={{
                  transform: "translateX(-10px)",
                }}
              >
                <Typography
                  fontSize="14px"
                  fontWeight="700"
                  color="rgb(34, 51, 84)"
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box className={style.greendot}></Box>
                  <Typography
                    fontSize="11px"
                    color="rgb(87, 202, 34)"
                    marginLeft="5px"
                  >
                    Online
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={style.button}>Chat</Box>
          </Box>
        ))}
      </Box>

      <Box className={style.messenger_footer}>
        <Box className={style.messenger_footer_btn}>
          View all participants{" "}
          <AiOutlineArrowRight
            fontSize="17px"
            color="white"
            style={{ transform: "translate3d(10px, 1px, 0)" }}
          ></AiOutlineArrowRight>
        </Box>
      </Box>
    </Box>
  );
}
