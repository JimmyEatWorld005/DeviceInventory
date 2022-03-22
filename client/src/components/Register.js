import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {
    Box,
    Button,
    FormControl,    
    InputLabel,
    OutlinedInput,
    TextField,
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

const Register = (props) => {
    const { initialFirstName, initialLastName, initialEmail, initialPassword, initialConfirmPassword } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialPassword);
    const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword);
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/register/', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
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
            <Box
                // component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Enter first name:</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Enter last name:</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Enter your email address:</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setEmail(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <TextField
                            id="enter-password"
                            label="Enter a password"
                            type="password"
                            autoComplete="current-password"
                            onChange = {(e)=>setPassword(e.target.value)}/>
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
                            id="confirm-password"
                            label="Confirm password"
                            type="password"
                            autoComplete="current-password"
                            onChange = {(e)=>setConfirmPassword(e.target.value)}/>
                            {
                                errors.name?
                                <span>{errors.name.message}</span>
                                :null
                            }
                        </FormControl>
                    </div>
                    <Button type="submit" variant="contained">Register</Button>
                </form>
            </Box>
        </div>
    )
}

export default Register;