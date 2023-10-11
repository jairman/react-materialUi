import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";


export const Register = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState({
        error: false,
        message:"",
    })

    const validateEmail = (email) =>{
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }




    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateEmail(email)){
            setError({
                error: false,
                message: ""
            })
            console.log('Email correcto')
        }else{
            setError({
                error: true,
                message: 'El email no es valido'
            })
        }
      
    }


  return (
    <>
      <Box  component="form" onSubmit={handleSubmit} >
        <TextField
          id="email"
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          required
          helperText={error.message}
          error={error.error}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Button type="submit" variant="outlined"  sx={{ mt: 2 }} >Register</Button>
      </Box>
    </>
  );
};
