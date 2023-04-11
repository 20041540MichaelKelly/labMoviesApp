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

export default function UserForm(user) {

    return (
        <Grid container direction={"row"} spacing={0}>
            <Grid item xs={6}>
                <TextField
                    margin="normal"
                    required
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
    );
};