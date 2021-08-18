import * as React from "react";
import {
  Checkbox,
  Link,
  Button,
  Box,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { StyleContainer, StyleGutter, StyleInput } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "redux/actions/Login";
import { AppState } from "redux/store";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import { readRecord } from "pages/utils/localStorageService";
import Loading from "@components/common/loading";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '21%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state: AppState) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginRequest(values));
    },
  });

  useEffect(() => {
    if (!readRecord("accessToken")) {
      router.push({ pathname: "Login" });
    } else {
      router.push({ pathname: "/dashboard" });
    }
  }, [auth.token]);

  return (
    <StyleContainer>
      <Loading loadingStatus={auth.loading}/>
      <StyleGutter container>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3" color="textSecondary">
            Login
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <StyleInput
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <StyleInput
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </StyleGutter>
    </StyleContainer>
  );
}
