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
import Alert from '@mui/material/Alert';

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const errorMessage = "";


  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
  
    const { data, error } = await supabase.auth.signUp(
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

    if (error) {
        alert(error.message)
    } else {
        return <SuccessAlert />;
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
        <Grid container direction={"row"} spacing={2}>
            <Grid item xs={6}>
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
            Sign In
          </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
