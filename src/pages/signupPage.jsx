import { useState } from 'react';
import { supabase } from '../supabaseClient';
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import SignUpForm from '../components/userAccount/signUpForm';
import SuccessAlert from '../components/alerts/successAlert'

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
      <SignUpForm />
    
    </Container>
  );
};
