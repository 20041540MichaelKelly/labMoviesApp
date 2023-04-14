import { useEffect, useState } from 'react';
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
import UserForm from '../userForm';

export default function UpdateUser() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [user, setUser] = useState([])

    useEffect(() => {
        (async () => {
          const { data: { user } } = await supabase.auth.getUser()
          setUser(user);
        })();
    })

    const handleUpdate = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);

        const { data, error } = await supabase.auth.updateUser(        
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
                <Box component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 1 }}>
                    <UserForm user ={user}/>
                </Box>
            </Box>
        </Container>
    );
};