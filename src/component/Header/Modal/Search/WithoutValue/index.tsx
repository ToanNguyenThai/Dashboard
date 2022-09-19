import { Box, Typography } from "@mui/material";
import {
  MdStarOutline,
  MdCancel,
  MdOutlineDashboard,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
import { TbRotateClockwise } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";
import { CustomWidthTooltip } from "../../../../CustomWidthTooltip";
import style from "./withoutvalue.module.css";

interface WithoutValueProps {
  searchList: any;
  search_trend: any;
}

export default function WithoutValue({
  searchList,
  search_trend,
}: WithoutValueProps) {
  return (
    <>
      <Typography className={style.instruction} variant="subtitle1">
        <FaQuestionCircle
          fontSize="16px"
          style={{ marginRight: "8px" }}
        ></FaQuestionCircle>
        Start typing to see the search results...
      </Typography>
      <Box className={style.belowInstruction}>
        <Typography
          fontWeight="700"
          fontSize="14px"
          color="#223354"
          marginTop="10px"
        >
          Recent searches
        </Typography>
        <>
          {search_trend.map(
            (item: any) =>
              item.recent && (
                <Box className={style.trendItem}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TbRotateClockwise
                      className={style.recentIcon}
                      fontSize="18px"
                    ></TbRotateClockwise>
                    <Typography fontSize="14px" marginLeft="5px">
                      {item.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomWidthTooltip
                      title="Save this search"
                      arrow
                      placement="top"
                    >
                      <Box className={`${style.actionIcon} ${style.saveIcon}`}>
                        <MdStarOutline
                          fontSize="20px"
                          color="#5569ff"
                        ></MdStarOutline>
                      </Box>
                    </CustomWidthTooltip>
                    <CustomWidthTooltip
                      title="Remove this search from history"
                      arrow
                      placement="top"
                    >
                      <Box
                        className={`${style.actionIcon} ${style.cancelIcon}`}
                        sx={{ marginLeft: "5px" }}
                      >
                        <MdCancel fontSize="20px" color="red"></MdCancel>
                      </Box>
                    </CustomWidthTooltip>
                  </Box>
                </Box>
              )
          )}
        </>
        <Typography
          fontWeight="700"
          fontSize="14px"
          color="#223354"
          marginTop="22px"
        >
          Saved searches
        </Typography>
        <>
          {search_trend.map(
            (item: any) =>
              item.saved && (
                <Box className={style.trendItem}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MdStarOutline
                      className={style.recentIcon}
                      fontSize="18px"
                    ></MdStarOutline>
                    <Typography fontSize="14px" marginLeft="5px">
                      {item.name}
                    </Typography>
                  </Box>

                  <CustomWidthTooltip
                    title="Remove this search from history"
                    arrow
                    placement="top"
                  >
                    <Box className={`${style.actionIcon} ${style.cancelIcon}`}>
                      <MdCancel fontSize="20px" color="red"></MdCancel>
                    </Box>
                  </CustomWidthTooltip>
                </Box>
              )
          )}
        </>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#eff1f5",
            margin: "30px 0px",
          }}
        ></Box>
        <Typography fontWeight="700" fontSize="14px" color="#223354">
          Popular searches
        </Typography>
        <Box className={style.popular}>
          <Box sx={{ width: "45%", padding: "27px 0 0 27px" }}>
            <Typography
              className={style.popularItemTitle}
              fontWeight="700"
              fontSize="13px"
            >
              <MdOutlineDashboard
                fontSize="20px"
                color="#5569ff"
                style={{ marginRight: "5px" }}
              ></MdOutlineDashboard>
              Dashboard
            </Typography>
            {searchList.dashboard.map(
              (item: any) =>
                item.popular && <a className={style.link}>{item.name}</a>
            )}
          </Box>

          <Box sx={{ width: "45%", padding: "27px 0 0 27px" }}>
            <Typography
              className={style.popularItemTitle}
              fontWeight="700"
              fontSize="13px"
            >
              <MdOutlinePhoneAndroid
                fontSize="20px"
                color="#5569ff"
                style={{ marginRight: "5px" }}
              ></MdOutlinePhoneAndroid>
              Management
            </Typography>
            {searchList.management.map(
              (item: any) =>
                item.popular && <a className={style.link}>{item.name}</a>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
