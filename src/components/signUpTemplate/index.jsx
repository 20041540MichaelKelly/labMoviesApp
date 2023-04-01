import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ErrorAlert from "../alerts/errorAlert";
import SuccessAlert from "../alerts/successAlert";
import Alert from '@mui/material/Alert';

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const errorMessage = "";


  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
  
    const { data, error } = await supabase.auth.SignUpWithPasswordCredentials(
        {
          email: formData.get("email"),
          password: formData.get("password"),
          options: {
            data: {
              first_name: formData.get("firstName"),
              last_name: formData.get("last_name")
            }
          }
        }
      )


    
  


    // let { data: validEmails, error } = await supabase
    // .from('authentication')
    // .select('email')
    // .eq('email', email);

    console.log(errorMessage);

    if (error) {
        <SuccessAlert />
    } else {
        <SuccessAlert />    
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container>
            <Grid item xs={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="name"
                autoFocus
            />
            </Grid>
            </ Grid>
            <Grid item xs={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="name"
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
          
        </Box>
      </Box>
    </Container>
  );
};
