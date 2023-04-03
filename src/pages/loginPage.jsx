// import { useState, useEffect } from 'react'
// import { supabase } from '../supabaseClient'
// import Auth from '../components/loginTemplate'
// import Account from '../components/accountSetup'
// import Home from './homePage'
// import SignUp from './signupPage'
// import { useNavigate, Navigate } from "react-router-dom";
// import MostPopularMoviesPage from './mostPopularMoviesPage'
// import SiteHeader from '../components/siteHeader'

// function login() {
//   const [session, setSession] = useState(null)
//   const [user, setUser] = useState(null)


//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     supabase.auth.getUser(({ data: { user } }) => {
//       setUser(user)
//     })

//   }, []) 

//   return(
//     <div className="container" style={{ padding: '50px 0 100px 0' }}>
//       {!session ? <Auth /> : <Home /> }
//     </div>
//   ) 
// }

// export default login;

import { useState } from 'react';
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




export default function Auth() {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const errorMessage = "";


  const handleSubmit = async (event) => {
    event.preventDefault()

   const formData = new FormData(event.currentTarget);
  
  const { data: validEmails, error, isError, isLoading } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  })

    if (error) {
        alert(error.message)
    } 

   setLoading(false)
}

  return (
    <Container component="main" maxWidth="xs">
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href= "/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};