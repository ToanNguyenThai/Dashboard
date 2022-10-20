import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { MdClose } from "react-icons/md";
import { CustomButton } from "../../../UI-components/CustomButton";
import { CustomOutlineButton } from "../../../UI-components/CustomOutlineButton";
import { projectActions } from "../../../../redux/slice/project";
import Toast from "../../../UI-components/Toast";
import style from "../../projects.module.css";
interface DeleteModalProps {
  deleteId: string;
  close: any;
}
export default function DeleteModal({ deleteId, close }: DeleteModalProps) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(projectActions.deleteProject(deleteId));
    setTimeout(() => {
      Toast(
        "success",
        "The projects has been deleted successfully",
        "top-right"
      );
      close();
    }, 100);
  };
  return (
    <Box className={style.deleteModal}>
      <Box className={style.circle}>
        <MdClose color="#ff1943" fontSize="40px"></MdClose>
      </Box>
      <Typography
        fontSize="25px"
        fontWeight="600"
        color="#223354"
        textAlign="center"
      >
        Do you really want to delete this <br></br> project?
      </Typography>
      <Typography
        fontSize="16px"
        fontWeight="400"
        color="#223354B3"
        textAlign="center"
      >
        You won't be able to revert after deletion
      </Typography>
      <Box sx={{ display: "flex" }}>
        <CustomOutlineButton
          onClick={() => close()}
          className={style.cancelBtn}
        >
          Cancel
        </CustomOutlineButton>
        <CustomButton
          onClick={() => handleDelete()}
          className={style.deleteBtn}
        >
          Delete
        </CustomButton>
      </Box>
    </Box>
  );
}
