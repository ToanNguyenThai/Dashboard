import { Box } from "@mui/material";
import Publish from "./Publish";
import Categories from "./Categories";
import Image from "./Image";
import style from "./rightlayout.module.css";
export default function RightLayout() {
  return (
    <Box className={style.right_container}>
      <Publish></Publish>
      <Categories></Categories>
      <Image></Image>
    </Box>
  );
}
