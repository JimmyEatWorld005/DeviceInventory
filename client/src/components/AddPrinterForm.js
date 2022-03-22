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

const AddPrinter = (props) => {
    const { initialPrinterName, initialAssetNumber, initialIpAddress, initialPrinterType, initialPrinterDriver, initialAddressStreet, initialAddressCity, initialAddressState, initialAddressZipCode } = props;
    const [printerName, setPrinterName] = useState(initialPrinterName);
    const [assetNumber, setAssetNumber] = useState(initialAssetNumber);
    const [ipAddress, setIPAddress] = useState(initialIpAddress);
    const [printerType, setPrinterType] = useState(initialPrinterType);
    const [printerDriver, setPrinterDriver] = useState(initialPrinterDriver);
    const [addressStreet, setAddressStreet] = useState(initialAddressStreet);
    const [addressCity, setAddressCity] = useState(initialAddressCity);
    const [addressState, setAddressState] = useState(initialAddressState);
    const [addressZipCode, setAddressZipCode] = useState(initialAddressZipCode);
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/printers/new/', {
            printerName,
            assetNumber,
            ipAddress,
            printerType,
            printerDriver,
            addressStreet,
            addressCity,
            addressState,
            addressZipCode,
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
                            <InputLabel>Printer Name</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setPrinterName(e.target.value)}/>
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
                            <InputLabel>IP Address</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setIPAddress(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Printer Type</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setPrinterType(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Printer Driver</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setPrinterDriver(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Street Address</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setAddressStreet(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>City</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setAddressCity(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>State</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setAddressState(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Zip Code</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setAddressZipCode(e.target.value)}/>
                            {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                            }
                        </FormControl>
                    </div>
                    <Button type="submit" variant="contained">Add Printer</Button>
                </form>
            </Box>
        </div>
    )
}

export default AddPrinter;
