import { Typography, Box, Card, CardContent } from "@mui/material";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

import style from "./task.module.css";
export default function Task() {
  return (
    <Box className={style.task}>
      <Typography
        fontSize="13px"
        fontWeight="700"
        color="rgba(34, 51, 84, 0.5)"
        textTransform="uppercase"
      >
        Task for today
      </Typography>
      <Card className={style.task_card}>
        <CardContent>
          <Typography fontSize="16px">Presentation site design</Typography>
          <Box sx={{ display: "flex", marginTop: "10px" }}>
            <Box className={style.onHold_btn}>on hold</Box>
            <Box className={style.time}>
              <AiOutlineClockCircle fontSize="18px"></AiOutlineClockCircle>
              <Typography fontSize="14px" marginLeft="5px">
                2:35 pm
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box className={style.left_line}></Box>
      </Card>

      <Typography
        fontSize="13px"
        fontWeight="700"
        color="rgba(34, 51, 84, 0.5)"
        textTransform="uppercase"
        marginTop="25px"
      >
        TOMORROW'S SCHEDULE
      </Typography>
      <Box className={style.circle_container}>
        <Box className={style.circle}>
          <FiCheck color="#57ca22" fontSize="40px"></FiCheck>
        </Box>
        <Typography fontSize="16px" fontWeight="600">
          Nothing to report
        </Typography>
        <Typography fontSize="15px" color="#223354B3">
          You don't have any other pending tasks in progress!
        </Typography>
      </Box>
    </Box>
  );
}
