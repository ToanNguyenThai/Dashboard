import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { emailActions } from "../../../../redux/slice/email";
import { Box, Checkbox, Typography } from "@mui/material";
import { CustomWidthTooltip } from "../../../CustomWidthTooltip";

import { useNavigate } from "react-router-dom";
import { MdArchive } from "react-icons/md";
import { FaRegTrashAlt, FaTag } from "react-icons/fa";
import { RiMailCheckFill } from "react-icons/ri";
import avatar from "../../../../assets/img/avatar.jpg";

import style from "./emailItem.module.css";
interface EmailProps {
  email: {
    id: number;
    from: string;
    to: string;
    title: string;
    content: string;
    day: string;
    inbox: boolean;
    outbox: boolean;
    favourites: boolean;
    drafts: boolean;
    deleted: boolean;
    important: boolean;
    work: boolean;
    task: boolean;
    business: boolean;
    checked: boolean;
  };
  selected: boolean;
  getCheckedEmail: any;
}

export default function EmailItem({
  email,
  selected,
  getCheckedEmail,
}: EmailProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const [emailItem, setEmailItem] = useState(email);

  const handleCheckbox = (e: any) => {
    let tmp = { ...emailItem };

    if (tmp.id == e.target.value) tmp.checked = e.target.checked;
    getCheckedEmail(tmp);
    setEmailItem(tmp);
  };
  useEffect(() => {
    setEmailItem(email);
  }, [email]);

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        height: "97px",
        width: "100%",
        padding: "20px 20px",
        borderBottom: "1px solid #e9e9e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      className={
        selected || emailItem.checked ? style.selectedBG : style.normalBG
      }
    >
      <Box>
        <Checkbox
          key={emailItem.id}
          value={emailItem.id}
          checked={emailItem.checked}
          onChange={(e) => handleCheckbox(e)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "11%",
        }}
      >
        {email.important && (
          <Box className={style.sidebar_icon} sx={{ color: "#57ca22" }}>
            <FaTag />
          </Box>
        )}{" "}
        {email.work && (
          <Box className={style.sidebar_icon} sx={{ color: "#ffa319" }}>
            <FaTag />
          </Box>
        )}{" "}
        {email.task && (
          <Box className={style.sidebar_icon} sx={{ color: "#33c2ff" }}>
            <FaTag />
          </Box>
        )}{" "}
        {email.business && (
          <Box className={style.sidebar_icon} sx={{ color: "#ff1943" }}>
            <FaTag />
          </Box>
        )}{" "}
      </Box>

      <Box
        sx={{
          width: "16%",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => navigate(`/mail/details/${email.id}`)}
      >
        <img src={avatar} className={style.avatar}></img>
        <Typography
          fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
          variant="h6"
          fontSize="16px"
          fontWeight="600"
        >
          {email.from}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "50%",
        }}
        onClick={() => navigate(`/mail/details/${email.id}`)}
      >
        <Typography
          fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
          variant="h6"
          fontSize="15px"
          fontWeight="600"
        >
          {email.title}
        </Typography>
        <Typography
          fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
          variant="body1"
          fontSize="14px"
          color="#223354B3"
        >
          {email.content
            .split(" ")
            .slice(0, 13)
            .join(" ")
            .replace(/<[^>]*>?/gm, "")}
        </Typography>
      </Box>

      {!isHover && !emailItem.checked ? (
        <Typography
          width="12%"
          variant="body1"
          fontSize="14px"
          color="#223354B3"
          textAlign="right"
          fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
        >
          {email.day.split(" ").slice(0, 2).join(" ")}
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 18px",
            width: "12%",
            height: "55px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            borderRadius: "10px",
          }}
        >
          <CustomWidthTooltip title="Archive" arrow placement="top">
            <Box className={style.icon}>
              <MdArchive fontSize="23px" />
            </Box>
          </CustomWidthTooltip>

          <CustomWidthTooltip title="Delete" arrow placement="top">
            <Box
              onClick={() => dispatch(emailActions.delete_single(emailItem.id))}
              className={style.icon}
            >
              <FaRegTrashAlt fontSize="20px" />
            </Box>
          </CustomWidthTooltip>
          <CustomWidthTooltip title="Mark as read" arrow placement="top">
            <Box className={style.icon}>
              <RiMailCheckFill fontSize="21px" />
            </Box>
          </CustomWidthTooltip>
        </Box>
      )}
    </Box>
  );
}
