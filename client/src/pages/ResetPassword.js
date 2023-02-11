import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://presto-kora.lotus21investments.com/">
        RoPadelTour
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const handleSingUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login_data = {
      username: data.get("username"),
    };
    var implemented = false;
    if (implemented){ 
      axios
      .post("http://localhost:3213/auth", login_data)
      .then((response) => {
      });
    }
      navigate("/signin")
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
            {/* <LockIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h6">
            Reset your password 
          </Typography>          
          <Typography align="center" variant="caption">
           An email with instructions to reset your password will be sent to your email address
          </Typography>
          <Box
            component="form"
            onSubmit={handleSingUpSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Email Address"
              type="email"
              autoComplete="username"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset my password
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="signin" variant="body2">
                  Sign In
                </Link>
              </Grid>
              <Grid item>
              <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
