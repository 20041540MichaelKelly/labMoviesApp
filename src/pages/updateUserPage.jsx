import { useState } from 'react';
import { supabase } from '../supabaseClient';
import UpdateUser from '../components/userAccount/updateUser';

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
    <UpdateUser />
  );
};
