import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ErrorAlert from "../components/alerts/errorAlert";
import SuccessAlert from "../components/alerts/successAlert";
import ForgotEmailModal from "../components/userAccount/forgotEmailModal"
import HomePage from './homePage';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import styles from '../components/reviewForm';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Auth() {
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHappened, setErrorHappened] = useState(false)
  const [open,setOpen] = useState(false)
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);
useEffect(()=>{
   if(errorMsg){
      setShowMessage(true);
   }
},[errorMsg])

{showMessage ? <ErrorAlert message={errorMsg} />: ""}

const handleSnackClose = async (event) => {
  setOpen(false);
  navigate("/");
}

const handleErrorClose = async (event) => {
  setErrorHappened(false);
}

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const { data: validEmails, error, isError, isLoading } = await supabase.auth.signInWithPassword({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    if (error) {
      setErrorMessage(error.message)
      setErrorHappened(true)

    } else {
      navigate(<HomePage />)
    }

    setLoading(false)

  }


  const handleForgotPassword = async(event)=> {
    event.preventDefault();
    return(<ForgotEmailModal/>)

    // const { data: validEmails, error, isError, isLoading } = await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: 'https://lab-movies-4l3vfheg6-20041540michaelkelly.vercel.app/update',
    // })
    // error ? setErrorMsg(error.message) : setSucceessMsg(true) 

    
  }

  // if(errorMsg) {
  //   return(<ErrorAlert message={errorMsg} /> )
  //  } 
  

  return (
    <Container component="main" maxWidth="xs">
      {showMessage ? <ErrorAlert message={errorMsg} /> : <></>}
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2" onClick={handleForgotPassword}>
                {"Forgot password?"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
};