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
import { CustomWidthTooltip } from "../../component/CustomWidthTooltip";

import { useForm, Controller } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginSelectors } from "../../redux/slice/login";

import logos from "../../assets/img/logos.png";
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
        width: "100vw",
        heigh: "100vh",
        backgroundColor: "#f2f5f9",
      }}
    >
      <Box className={style.introduce}>
        <img style={{ cursor: "pointer" }} src={logos}></img>
        <Box className={style.bigTitle}>Multiple auth methods included</Box>
        <Box className={style.circle_img_container}>
          <CustomWidthTooltip title="Auth0" arrow placement="top">
            <Box
              style={{
                width: "80px",
                height: "80px",
                transform: "translateX(-20px)",
              }}
              className={style.circle_img}
            >
              <img src="https://tokyo.bloomui.com/static/images/logo/auth0.svg"></img>
            </Box>
          </CustomWidthTooltip>

          <CustomWidthTooltip title="Firebase" arrow placement="top">
            <Box
              style={{
                width: "90px",
                height: "90px",
                transform: "translateY(40px)",
              }}
              className={style.circle_img}
            >
              <img src="https://tokyo.bloomui.com/static/images/logo/firebase.svg"></img>
            </Box>
          </CustomWidthTooltip>

          <CustomWidthTooltip title="Json Web Token" arrow placement="top">
            <Box
              style={{
                width: "110px",
                height: "110px",
                transform: "translate3d(17px, 10px, 0)",
              }}
              className={style.circle_img}
            >
              <img src="https://tokyo.bloomui.com/static/images/logo/jwt.svg"></img>
            </Box>
          </CustomWidthTooltip>

          <CustomWidthTooltip title="AWS Amplify" arrow placement="top">
            <Box
              style={{
                width: "70px",
                height: "70px",
                transform: "translate3d(20px, 90px, 0)",
              }}
              className={style.circle_img}
            >
              <img src="https://tokyo.bloomui.com/static/images/logo/amplify.svg"></img>
            </Box>
          </CustomWidthTooltip>
        </Box>

        <Typography marginTop="80px" variant="body1" className={style.desc}>
          Choose between JSON Web Token, Firebase, AWS Amplify or Auth0. Regular
          login/register functionality is also available.
        </Typography>

        <Typography marginTop="30px" variant="h6" className={style.desc_title}>
          Want to switch auth methods?
        </Typography>

        <Typography variant="body1" className={style.desc}>
          It only takes seconds. There is a documentation section showing how to
          do exactly that.{" "}
          <a className={style.link} href="#">
            Read docs
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "62%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            width: 530,
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            padding: "50px 40px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontSize="30px"
            fontWeight="600"
          >
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
                      errors.email !== undefined
                        ? errorTextfield
                        : styleTextfield
                    }
                    fullWidth
                    onChange={onChange}
                    value={value}
                    label="Email address"
                    id="outlined-required"
                    error={errors.email !== undefined}
                    helperText={
                      (errors?.email?.type == "required" && (
                        <span className={style.invalid}>
                          This field is required
                        </span>
                      )) ||
                      (errors?.email?.type == "pattern" && (
                        <span className={style.invalid}>
                          The email provided should be a valid email address
                        </span>
                      ))
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
                <Box
                  sx={{ marginTop: "20px" }}
                  className={style.customTextField}
                >
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
                      errors.password !== undefined && (
                        <span className={style.invalid}>
                          This field is required
                        </span>
                      )
                    }
                  />
                </Box>
              )}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Controller
                rules={{ required: true }}
                name={"terms"}
                control={control}
                render={({ field: { onChange } }) => (
                  <FormGroup>
                    <FormControlLabel
                      onChange={onChange}
                      control={<Checkbox />}
                      className={style.cblabel}
                      label={
                        <Typography className={style.formControlLabel}>
                          I accept the{" "}
                          <a href="#" className={style.link}>
                            {" "}
                            terms and conditions.{" "}
                          </a>
                        </Typography>
                      }
                    />
                  </FormGroup>
                )}
              />

              <a
                style={{ fontWeight: "600", fontSize: "14px" }}
                className={style.link}
                href="#"
              >
                Lost Password?
              </a>
            </Box>
            {errors.terms !== undefined && (
              <span style={{ marginLeft: "14px" }} className={style.invalid}>
                You must agree to our terms and conditions
              </span>
            )}
            <Button
              onClick={handleSubmit(onSubmit)}
              className={style.mybutton}
              sx={{}}
              variant="contained"
            >
              {" "}
              Sign in
            </Button>

            <Typography
              fontWeight="600"
              fontSize="16px"
              marginTop="30px"
              color="#223354"
            >
              Don’t have an account, yet?
              <a className={style.link} href="#" style={{ fontSize: "15px" }}>
                Sign up here
              </a>
            </Typography>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
