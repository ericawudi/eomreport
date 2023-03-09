import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { CircularProgress, Paper, Typography } from "@mui/material";
import Copyright from "./Copyright";
import { useForm } from "react-hook-form";
import Notification from "./Notification";
import { Login } from "../service/service";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";

function LoginForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data, _event) => {
    const { username, password } = data;
    setLoading(true);
    const response = await Login(username, password);
    if (response.data?.status === 200) {
      navigate("/");
    } else {
      setNotificationMessage(response.data.message);
      setOpen(true);
    }
    setLoading(false);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        alignSelf: "center",
      }}
    >
      <CssBaseline />
      <Paper>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            {Object.keys(errors).map((key, index) => (
              <div key={index++}>
                <Typography
                  variant="caption"
                  color={"red"}
                  gutterBottom
                  align="center"
                >
                  {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${
                    errors[key].message
                  }`}
                </Typography>
              </div>
            ))}

            <TextField
              {...register("username", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 3,
                  message: "Must be more than 3 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9@_-\s]*$/,
                  message: "Unacceptable character(s) found",
                },
              })}
              error={errors?.username && true}
              margin="normal"
              fullWidth
              label="Username*"
              autoComplete="username"
              autoFocus
            />

            <TextField
              {...register("password", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 3,
                  message: "Must be more than 3 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9@_-\s]*$/,
                  message: "Unacceptable character(s) found",
                },
              })}
              error={errors?.password && true}
              margin="normal"
              fullWidth
              label="Password*"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Login
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "54.7%",
                  left: "49%",
                }}
              />
            )}
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Box>
      </Paper>
      <Notification
        severity="error"
        message={notificationMessage}
        openNotification={open}
        handleClose={handleClose}
      />
    </Container>
  );
}

export default LoginForm;
