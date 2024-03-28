import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { Container, Button, Typography } from "@mui/material";

function ErrorPage() {
  const error = useRouteError();
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", padding: 5 }}>
      <Typography variant="h1">404</Typography>
      <Typography>Something went</Typography>
      <Typography fontWeight={"bold"} sx={{ mb: 5 }}>
        WRONG!
      </Typography>
      <Link to={"/"}>
        <Button variant="contained" sx={{ borderRadius: "1.25rem" }}>
          Back to Homepage
        </Button>
      </Link>
    </Container>
  );
}

export default ErrorPage;
