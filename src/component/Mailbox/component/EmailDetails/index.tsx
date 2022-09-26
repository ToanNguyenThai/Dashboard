import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emailSelectors, emailActions } from "../../../../redux/slice/email";
import { Email } from "../EmailList";
import { Box, Typography, Modal } from "@mui/material";
import { CustomWidthTooltip } from "../../../CustomWidthTooltip";
import { MdArrowBack, MdArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import { RiMailCheckFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import avatar from "../../../../assets/img/avatar.jpg";
import parse from "html-react-parser";

import Reply from "./Reply";

import style from "./emaildetails.module.css";

export default function EmailDetails() {
  const [open, setOpen] = useState(false);
  const [thisEmail, setThisEmail] = useState<Email>();
  const [Recipient, setRecipient] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email: Email[] = useSelector(emailSelectors.selectEmail);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const { emailID } = params;
    const tmp = email.filter((item) => item.id == parseInt(emailID || ""));
    setThisEmail(tmp[0]);
    setRecipient(tmp[0].from);
  }, [params]);

  return (
    <>
      <Box
        sx={{
          padding: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e9e9e9",
        }}
      >
        <CustomWidthTooltip title="Go back" arrow placement="top">
          <Box className={style.iconArrow} onClick={() => navigate(-1)}>
            <MdArrowBack fontSize="28px"></MdArrowBack>
          </Box>
        </CustomWidthTooltip>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <CustomWidthTooltip title="Archive" arrow placement="top">
            <Box className={style.icon}>
              <MdArchive fontSize="23px" />
            </Box>
          </CustomWidthTooltip>
          <CustomWidthTooltip title="Delete" arrow placement="top">
            <Box
              onClick={() =>
                dispatch(emailActions.delete_single(thisEmail?.id))
              }
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
          <Box onClick={handleOpen} className={style.icon}>
            <HiDotsVertical fontSize="21px" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "36px 15px", paddingRight: "25px" }}>
        <Typography
          fontSize="25px"
          fontWeight="700"
          color="#223354"
          sx={{ paddingLeft: "90px" }}
        >
          {thisEmail?.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <img src={avatar} className={style.avatar}></img>
            <Box>
              <Typography variant="h6" fontSize="16px" fontWeight="600">
                {thisEmail?.from}
              </Typography>
              <Typography variant="body1" fontSize="14px" color="#223354B3">
                to {thisEmail?.to}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" fontSize="14px" color="#223354B3">
            {thisEmail?.day}
          </Typography>
        </Box>

        <Box className={style.contentBox}>
          {parse(thisEmail?.content || "")}
        </Box>
      </Box>
      <Reply recipient={Recipient}></Reply>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalBackdrop"
      >
        <Box className={style.modalContent}>
          <Typography className={style.contentItem} variant="body1">
            Mark as read
          </Typography>
          <Typography className={style.contentItem} variant="body1">
            Mark as important
          </Typography>
          <Typography className={style.contentItem} variant="body1">
            Show similar email
          </Typography>
          <Typography className={style.contentItem} variant="body1">
            Forward as attachment
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
