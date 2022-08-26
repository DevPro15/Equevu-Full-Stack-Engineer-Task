import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import StyledCard from "../UI/StyledCard";
import StyledBox from "../UI/StyledBox";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <StyledBox>
      <StyledCard sx={{ height: "350px", width: "350px" }}>
        <CardContent>
          <Typography variant="h3" p={3}>
            LOG IN
          </Typography>
          <TextField
            sx={{ width: "250px", marginBottom: "10px" }}
            id="email"
            label="E-mail"
            type="email"
          />
          <TextField
            sx={{ width: "250px" }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </CardContent>
        <CardActions>
          <Button
            sx={{ width: "250px", height: "38px", marginBottom: "5px" }}
            variant="contained"
            type="submit"
          >
            Log In
          </Button>
        </CardActions>
      </StyledCard>
    </StyledBox>
  );
};

export default LoginPage;
