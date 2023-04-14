import { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import styles from '../../reviewForm/styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHappened, setErrorHappened] = useState(false)
  const navigate = useNavigate();

  const handleSnackClose = async (event) => {
    setOpen(false);
    navigate("/");
  }

  const handleErrorClose = async (event) => {
    setErrorHappened(false);
  }

  const validateSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const { data: validateEmail} = await supabase
      .from('profiles')
      .select()
      .eq('email', formData.get("email"))

      if(validateEmail.length > 0) {
        setErrorMessage("The Email entered already exists");
        setErrorHappened(true);
      }else{
        handleSubmit(formData)
      }
  }

  const handleSubmit = async (formData) => {

    const { data, error } = await supabase.auth.signUp(
      {
        email: formData.get("email"),
        password: formData.get("password"),
        options: {
          data: {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName")
          }
        }
      }
    )
      
    if (error) {
      setErrorHappened(true)
      setErrorMessage(error.message)
    } else {
      setOpen(true)
    }
    setLoading(false)
  }


  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",        
      }}
    >
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={errorHappened}
        onClose={handleErrorClose}
      >
        <Alert severity="error"
          open={errorHappened}
          onClose={handleErrorClose}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleErrorClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}>
          {errorMessage}</Alert>
      </Snackbar>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success"
          open={open}
          onClose={handleSnackClose}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleSnackClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}>
          <Typography variant="h4">
            Thank you for signing up
          </Typography>
        </Alert>
      </Snackbar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={validateSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container direction={"row"}>
          <Grid item xs={6} sx={{ mr: 0}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="first name"
              autoFocus
            />
          </ Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="last name"
              autoFocus
            />
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
