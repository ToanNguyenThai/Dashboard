import { useEffect } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginSelectors } from "../../redux/slice/login";

import style from "./login.module.css";
export default function Login() {
  const user = useSelector(loginSelectors.selectAccount);

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (Object.keys(user).length === 0) return;
    const lastUrl = new URLSearchParams(location.search);
    navigate(lastUrl.get("url") || "/");
  }, [user, location]);

  const onSubmit = (data: any) => {
    dispatch(loginActions.login(data));
  };

  const styleTextfield = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#5569ff",
      },
    },
  };
  const errorTextfield = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  };

  return (
    <Box
      sx={{
        width: "100wh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f5f9",
      }}
    >
      <Box
        sx={{
          width: 530,
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "50px 40px",
        }}
      >
        <Typography variant="h4" align="center" fontWeight="600">
          Sign in
        </Typography>
        <Typography variant="body1" align="center" color="#223354B3">
          Fill in the fields below to sign into your account.
        </Typography>
        <form style={{ marginTop: "40px" }}>
          <Controller
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            name={"email"}
            control={control}
            defaultValue="tokio@gmail.com"
            render={({ field: { onChange, value } }) => (
              <Box className={style.customTextField}>
                <TextField
                  autoFocus
                  sx={
                    errors.email !== undefined ? errorTextfield : styleTextfield
                  }
                  fullWidth
                  onChange={onChange}
                  value={value}
                  label="Email address"
                  id="outlined-required"
                  error={errors.email !== undefined}
                  helperText={
                    (errors?.email?.type == "required" &&
                      "This field is required") ||
                    (errors?.email?.type == "pattern" &&
                      "Please enter valid email")
                  }
                />
              </Box>
            )}
          />
          <Controller
            rules={{ required: true }}
            name={"password"}
            control={control}
            defaultValue="tokio@gmail.com"
            render={({ field: { onChange, value } }) => (
              <Box sx={{ marginTop: "20px" }} className={style.customTextField}>
                <TextField
                  sx={
                    errors.password !== undefined
                      ? errorTextfield
                      : styleTextfield
                  }
                  fullWidth
                  onChange={onChange}
                  value={value}
                  id="outlined-required"
                  label="Password"
                  type="password"
                  error={errors.password !== undefined}
                  helperText={
                    errors.password !== undefined && "This field is required"
                  }
                />
              </Box>
            )}
          />

          <Controller
            rules={{ required: true }}
            name={"terms"}
            control={control}
            render={({ field: { onChange } }) => (
              <FormGroup sx={{ marginTop: "20px" }}>
                <FormControlLabel
                  onChange={onChange}
                  control={<Checkbox />}
                  label="I accept the terms and conditions."
                />
                {errors.terms !== undefined && (
                  <span className={style.invalid}>
                    You must agree to our terms and conditions
                  </span>
                )}
              </FormGroup>
            )}
          />

          <Button
            onClick={handleSubmit(onSubmit)}
            className={style.mybutton}
            sx={{}}
            variant="contained"
          >
            {" "}
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
}
