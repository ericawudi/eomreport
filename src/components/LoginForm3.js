import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography, TextField, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    width: 300,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

function LoginForm3() {
  const classes = useStyles();

  return (
    <>
      <h1>hello there</h1>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
          <form className={classes.form}>
            <TextField
              label="Username"
              variant="outlined"
              // className={classes.textField}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              // className={classes.textField}
              required
            />
            <Button
              variant="contained"
              color="primary"
              // className={classes.button}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default LoginForm3;
