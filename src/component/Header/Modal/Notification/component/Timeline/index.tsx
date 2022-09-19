import {
  Timeline,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
  timelineItemClasses,
} from "@mui/lab";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaIdBadge } from "react-icons/fa";
import { Typography, AvatarGroup, Avatar, Box } from "@mui/material";

import avatar from "../../../../../../assets/img/avatar.jpg";
import bicycles from "../../../../../../assets/img/bicycles.jpg";

import bicycle from "../../../../../../assets/img/bicycle.jpg";

import runners from "../../../../../../assets/img/runners.jpg";
import style from "./timeline.module.css";

export default function TimeLine() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              transform: "scale(1.5)",
            }}
            color="success"
          >
            <MdOutlineBusinessCenter fontSize="15px" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingBottom: "36px" }}>
          <Typography fontSize="14px" fontWeight="700" color="#223354">
            Java exam day
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="rgba(34, 51, 84, 0.7)"
          >
            Bill Clinton's presidential scandal makes it online.
          </Typography>
          <Box sx={{ display: "flex", marginTop: "8px" }}>
            <AvatarGroup
              sx={{
                flexDirection: "row-reverse",
                justifyContent: "flex-start",
              }}
              total={5}
            >
              <Avatar
                // sx={{ transform: "scale(0.8)" }}
                alt="Remy Sharp"
                src={avatar}
              />
              <Avatar
                // sx={{ transform: "scale(0.8)" }}
                alt="Travis Howard"
                src={avatar}
              />
              <Avatar
                // sx={{ transform: "scale(0.8)" }}
                alt="Agnes Walker"
                src={avatar}
              />
            </AvatarGroup>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              transform: "scale(1.5)",
            }}
            color="primary"
          >
            <FaIdBadge style={{ transform: "scale(0.8 )" }} fontSize="15px" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingBottom: "36px" }}>
          <Typography fontSize="14px" fontWeight="700" color="#223354">
            Business investor meeting
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="rgba(34, 51, 84, 0.7)"
          >
            Mosaic, the first graphical browser, is introduced to the average
            consumer.
          </Typography>

          <Box sx={{ display: "flex", marginTop: "8px" }}>
            <img
              className={style.businessImg}
              style={{
                width: "88px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
              src={bicycles}
            ></img>
            <img
              className={style.businessImg}
              style={{
                width: "88px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
              src={runners}
            ></img>
            <img
              className={style.businessImg}
              style={{
                width: "88px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
              src={bicycle}
            ></img>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              borderWidth: "4px",
              transform: "scale(0.4) translateX(-2px)",
            }}
            variant="outlined"
            color="error"
          >
            <FaIdBadge style={{ visibility: "hidden" }} fontSize="15px" />
          </TimelineDot>
          <TimelineConnector sx={{ transform: "translateX(-1px)" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ padding: "1px 14px", paddingBottom: "36px" }}>
          <Typography fontSize="14px" fontWeight="700" color="#223354">
            Learning round table gathering
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="rgba(34, 51, 84, 0.7)"
          >
            First ever iPod launches.
          </Typography>
          <Box className={style.timelineBtn}>Submit report</Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
