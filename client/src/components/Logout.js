import * as React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {
    Button,
} from '@mui/material';


const Logout = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/logout/')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
                console.log("err.res:", err.res);
                console.log("err,res.data:", err.res.data);
                console.log("err.res.data.errors:", err.res.data.errors);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <Button type="submit" variant="inherit">Logout</Button>
            </form>
        </div>
    )
}


export default Logout;