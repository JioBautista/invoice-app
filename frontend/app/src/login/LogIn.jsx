import React from "react";
import {
  Typography,
  Container,
  TextField,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import { Link, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStore } from "../store/useStore";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { receiveToken, userToken } = useStore((state) => ({
    receiveToken: state.receiveToken,
    userToken: state.userToken,
  }));

  const onSubmit = (data) => {
    axios
      .post("https://clownfish-app-egma9.ondigitalocean.app/api-token/", data)
      .then(function (response) {
        sessionStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  console.log(userToken);
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            {...register("username", { required: true })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LogIn;