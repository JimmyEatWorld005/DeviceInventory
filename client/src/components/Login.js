import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    TextField
} from '@mui/material';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}



const Login = (props) => {
    const { initialEmail, initialConfirmPassword } = props;
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialConfirmPassword)
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/login/', {
            email,
            password,
            errors
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/deviceinventory");
            })
            .catch((err)=>{
                console.log(err);
                console.log("err.res:", err.res);
                console.log("err,res.data:", err.res.data);
                console.log("err.res.data.errors:", err.res.data.errors);
                setErrors(err.res.data.errors);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Email address:</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setEmail(e.target.value)}/>
                        {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                        }
                    </FormControl>
                </div>
                <div>
                    <FormControl variant="outlined" style={styles.input}>
                        <TextField
                        id="login-password"
                        label="Password"
                        type="password"
                        onChange = {(e)=>setPassword(e.target.value)}/>
                        {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                        }
                    </FormControl>
                </div>
                <Button type="submit" variant="contained">Login</Button>
            </form>
        </div>
    )
}

export default Login;