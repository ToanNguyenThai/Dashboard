import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { languageType } from "../..";
import style from "./language.module.css";

interface languageProps {
  languageItem: languageType[];
  flag: string;
  handleChangeLanguage: any;
}

export default function Language({
  languageItem,
  flag,
  handleChangeLanguage,
}: languageProps) {
  const { t } = useTranslation();
  return (
    <Box className={style.modalLanguage}>
      <Typography
        variant="body1"
        fontSize="14px"
        fontWeight="600"
        color="#6e759f"
      >
        {t("LANG.TITLE")}
      </Typography>
      {languageItem.map((item) => (
        <Box
          onClick={() => handleChangeLanguage(item)}
          className={
            flag === item.flag ? style.selectedLanguage : style.languageItem
          }
        >
          <img
            style={{
              width: "30px",
            }}
            src={item.flag}
          ></img>
          <Typography
            variant="body1"
            fontSize="14px"
            color={flag === item.flag ? "#223354" : "#6e759f"}
            marginLeft="20px"
          >
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
