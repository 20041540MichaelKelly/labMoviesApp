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

export default function Auth() {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSucceessMsg] = useState(false)

  const [showMessage, setShowMessage] = useState(false);
useEffect(()=>{
   if(errorMsg){
      setShowMessage(true);
   }
},[errorMsg])

{showMessage ? <ErrorAlert message={errorMsg} />: ""}

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const { data: validEmails, error, isError, isLoading } = await supabase.auth.signInWithPassword({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    if (error) {
      setErrorMsg(error.message)
      return(errorMsg ? <ErrorAlert message={errorMsg} /> : <></>)

    } else {
      setSucceessMsg(true)
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