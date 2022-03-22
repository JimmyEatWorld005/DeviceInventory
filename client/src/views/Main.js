import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from '../components/Login';
import Register from '../components/Register';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Main = () => {

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <div align="center">
                        <h1>
                            Welcome to the Device Inventory
                        </h1>
                        <p>
                            Please Login or Register
                        </p>
                    </div>
                </Typography>
                </Toolbar>
            </AppBar>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={10}
                alignItems="center"
                justifyContent="center"
            >
                <Item>
                    <Login />
                </Item>
                <Item>
                    <Register />
                </Item>
            </Stack>
            </Box>
        </div>
    )
}
export default Main;