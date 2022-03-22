import * as React from 'react';

import Appbar from '../components/Appbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import AddComputerForm from '../components/AddComputerForm';
import AddPrinterForm from '../components/AddPrinterForm';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const AddDeviceForm = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Appbar />
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={10}
                alignItems="center"
                justifyContent="center"
            >
                <Item>
                    <AddComputerForm />
                </Item>
                <Item>
                    <AddPrinterForm />
                </Item>
            </Stack>
            </Box>
        </div>
    )
}

export default AddDeviceForm;