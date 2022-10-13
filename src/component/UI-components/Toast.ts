import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type ToastType = "info" | "success" | "warn" | "error";
type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";
const Toast = (type: ToastType, msg: string, position: ToastPosition) => {
  toast[type](msg, {
    position: position,
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default Toast;
