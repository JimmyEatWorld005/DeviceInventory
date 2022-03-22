import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {
    Box,
    Button,
    FormControl,    
    InputLabel,
    OutlinedInput,
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

const AddComputer = (props) => {
    const { initialComputerName, initialAssetNumber, initialCpu, initialMemory, initialOperatingSystem } = props;
    const [computerName, setComputerName] = useState(initialComputerName);
    const [assetNumber, setAssetNumber] = useState(initialAssetNumber);
    const [cpu, setCpu] = useState(initialCpu);
    const [memory, setMemory] = useState(initialMemory);
    const [operatingSystem, setOperatingSystem] = useState(initialOperatingSystem);
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/computers/new/', {
            computerName,
            assetNumber,
            cpu,
            memory,
            operatingSystem,
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
                            <InputLabel>Computer Name</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setComputerName(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Asset Number</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setAssetNumber(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>CPU</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setCpu(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Memory</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setMemory(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Operating System</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setOperatingSystem(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <Button type="submit" variant="contained">Add Computer</Button>
                </form>
            </Box>
        </div>
    )
}

export default AddComputer;
