import { useState, useEffect } from "react";
import EmailItem from "../EmailItem";
import {
  Box,
  TextField,
  InputAdornment,
  Checkbox,
  Typography,
} from "@mui/material";
import { MdSearch, MdArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiMailCheckFill } from "react-icons/ri";
import style from "./emaillist.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { emailSelectors } from "../../../../redux/slice/email";
export type EmailType =
  | "inbox"
  | "outbox"
  | "favourites"
  | "drafts"
  | "deleted"
  | "important"
  | "work"
  | "task"
  | "business";

export type Email = {
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
};
type EmailWithCheckBox = {
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
type ParamType = {
  type: EmailType;
};

export default function EmailList() {
  const styleTextfield = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#5569ff",
      },
    },
  };
  const email: EmailWithCheckBox[] = useSelector(emailSelectors.selectEmail);

  const [filledEmail, setFilledEmail] = useState<EmailWithCheckBox[]>();
  const [selectAll, setSelectAll] = useState(false);
  const [isAnyChecked, setIsAnyChecked] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const param = useParams<ParamType>();

  const getAllEmail = () => {
    const { type } = param;
    let emailWithoutChecked: EmailWithCheckBox[] = [];

    setSelectAll(false);
    if (type !== "deleted") {
      emailWithoutChecked = email.filter(
        (item: EmailWithCheckBox) =>
          item[type || "inbox"] === true && !item.deleted
      );
    } else {
      emailWithoutChecked = email.filter(
        (item: EmailWithCheckBox) => item.deleted === true
      );
    }

    return emailWithoutChecked.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });
  };

  useEffect(() => {
    setFilledEmail(getAllEmail());
  }, [param, email]);

  useEffect(() => {
    let count = 0;
    filledEmail?.forEach((item) => {
      if (item.checked === true) setIsAnyChecked(isAnyChecked + 1);
      else if (item.checked === false) count++;
    });
    if (count === filledEmail?.length) setIsAnyChecked(0);
  }, [filledEmail]);

  useEffect(() => {
    let paramsEmail = getAllEmail();
    if (searchValue.length > 0) {
      let emailWithSearch: EmailWithCheckBox[] = [];
      paramsEmail?.forEach((item) => {
        if (item.content.toLowerCase().includes(searchValue.toLowerCase()))
          emailWithSearch.push(item);
      });

      setFilledEmail(emailWithSearch);
    } else getAllEmail();
  }, [searchValue]);

  const handleSelectAll = (e: any) => {
    const emailList: EmailWithCheckBox[] = [];
    filledEmail?.forEach((item) => {
      emailList.push({ ...item, checked: e.target.checked });
    });
    setSelectAll(e.target.checked);
    setFilledEmail(emailList);
  };
  const getCheckedEmail = (value: EmailWithCheckBox) => {
    let cloned = JSON.parse(JSON.stringify(filledEmail));

    cloned?.forEach((item: EmailWithCheckBox) => {
      if (item.id === value.id) {
        if (!item.checked) item.checked = true;
        else item.checked = false;
      }
    });
    setFilledEmail(cloned);
  };

  return (
    <>
      <Box sx={{ padding: "25px 20px", paddingBottom: "10px" }}>
        <Box sx={{ padding: "0px 11px" }} className={style.customTextField}>
          <TextField
            onChange={(e) => setSearchValue(e.target.value)}
            sx={styleTextfield}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdSearch fontSize="25px" />
                </InputAdornment>
              ),
            }}
            placeholder="Search messages..."
          ></TextField>
        </Box>
        <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
          <Checkbox
            sx={{ marginRight: "10px" }}
            checked={selectAll}
            onChange={(e) => handleSelectAll(e)}
            id="checkbox"
          ></Checkbox>
          {selectAll || isAnyChecked > 1 ? (
            <Box
              sx={{
                display: "flex",
                width: "11%",
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  color: "#5569ff",
                  marginRight: "15px",
                }}
              >
                <MdArchive fontSize="23px" />
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  color: "#5569ff",
                  marginRight: "15px",
                }}
              >
                <FaRegTrashAlt fontSize="20px" />
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  color: "#5569ff",
                  marginRight: "15px",
                }}
              >
                <RiMailCheckFill fontSize="21px" />
              </Box>
            </Box>
          ) : (
            <label className={style.cbLabel} htmlFor="checkbox">
              Select all
            </label>
          )}
        </Box>
      </Box>
      {filledEmail?.length !== 0 ? (
        <Box
          sx={{
            borderTop: "1px solid #e9e9e9",
          }}
        >
          {filledEmail?.map((item) => (
            <EmailItem
              selected={selectAll}
              email={item}
              getCheckedEmail={getCheckedEmail}
            ></EmailItem>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            borderTop: "1px solid #e9e9e9",
            paddingTop: "40px",
          }}
        >
          <Typography variant="h5" color="#223354B3" textAlign="center">
            There are no messages in this category
          </Typography>
        </Box>
      )}
    </>
  );
}
