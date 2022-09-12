import { Box, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";

import style from "./megamenu.module.css";
export default function MegaMenu() {
  return (
    <Box className={style.megaMenu}>
      <Box className={style.mega_header}>
        <Box>
          <Typography
            variant="h6"
            fontSize="15px"
            fontWeight="700"
            color="grey"
          >
            Mega Menus
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
            color={`rgba(34, 51, 84, 0.7)`}
          >
            This is an example for custom menus
          </Typography>
        </Box>
        <a className={style.link}>View all</a>
      </Box>
      <Box className={style.mega_body}>
        <Box className={style.megaList}>
          <Box
            className={`${style.megaItem} ${style.megaItem_col1} ${style.megaItem_col1_active}`}
          >
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Automation
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col1}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Analytics
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>

          <Box className={`${style.megaItem} ${style.megaItem_col1}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Banking
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col1}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Commerce
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col1}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Cryptop
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
        </Box>

        <Box className={`${style.megaList} ${style.centerItem}`}>
          <Box
            className={`${style.megaItem} ${style.megaItem_col2} ${style.megaItem_col2_active}`}
          >
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Finance
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col2}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Fitness
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>

          <Box className={`${style.megaItem} ${style.megaItem_col2}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Healthcare
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col2}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Helpdesk
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col2}`}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Learning
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
        </Box>

        <Box className={style.megaList}>
          <Box
            className={`${style.megaItem} ${style.megaItem_col3}  ${style.megaItem_col3_active} `}
          >
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Calendar
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
          <Box className={`${style.megaItem} ${style.megaItem_col3} `}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              File manager
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>

          <Box className={`${style.megaItem} ${style.megaItem_col3} `}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Job Platform
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>

          <Box className={`${style.megaItem} ${style.megaItem_col3} `}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Messenger
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>

          <Box className={`${style.megaItem} ${style.megaItem_col3} `}>
            <Typography
              className={style.megaText}
              fontWeight="600"
              fontSize="14px"
            >
              Project Board
            </Typography>
            <MdKeyboardArrowRight
              fontSize="25px"
              color="grey"
            ></MdKeyboardArrowRight>
          </Box>
        </Box>
      </Box>

      <Box className={style.mega_footer}>
        <Box className={style.mega_footer_btn}>View more examples</Box>
      </Box>
    </Box>
  );
}
