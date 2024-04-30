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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

export async function onSubmit(data) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api-token/", data);
    const token = response.data.token;
    sessionStorage.setItem("token", token);
    console.log(token);
  } catch (error) {
    console.log(error);
  }
}

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
