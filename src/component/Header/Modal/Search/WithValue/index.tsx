import { Box, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbRotateClockwise } from "react-icons/tb";
import style from "./withvalue.module.css";
interface WithValueProps {
  searchList: any;
}
export default function WithValue({ searchList }: WithValueProps) {
  return (
    <Box className={style.withalue}>
      <Box>
        <Typography
          fontWeight="700"
          fontSize="14px"
          color="#223354"
          paddingBottom="10px"
          paddingTop="5px"
        >
          Dashboards
        </Typography>

        {searchList.dashboard.map(
          (item: any) =>
            !item.popular && (
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

                <MdKeyboardArrowRight fontSize="20px"></MdKeyboardArrowRight>
              </Box>
            )
        )}
      </Box>

      <Box>
        <Typography
          fontWeight="700"
          fontSize="14px"
          color="#223354"
          paddingBottom="10px"
          paddingTop="20px"
        >
          Applications
        </Typography>

        {searchList.application.map(
          (item: any) =>
            !item.popular && (
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

                <MdKeyboardArrowRight fontSize="20px"></MdKeyboardArrowRight>
              </Box>
            )
        )}
      </Box>

      <Box>
        <Typography
          fontWeight="700"
          fontSize="14px"
          color="#223354"
          paddingBottom="10px"
          paddingTop="20px"
        >
          Management
        </Typography>

        {searchList.management.map(
          (item: any) =>
            !item.popular && (
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

                <MdKeyboardArrowRight fontSize="20px"></MdKeyboardArrowRight>
              </Box>
            )
        )}
      </Box>
    </Box>
  );
}
