import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Appbar from '../components/Appbar'
import DeviceInventoryMenu from '../components/DeviceInventoryMenu'
import TableComputers from '../components/TableComputers'
import TablePrinters from '../components/TablePrinters'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DeviceInventory = () => {
    return (
        <div>
            <Appbar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                    <Item>
                        <DeviceInventoryMenu />
                    </Item>
                    </Grid>
                    <Grid item xs={8}>
                    <Item>
                    <TableComputers />
                    <TablePrinters />
                    </Item>
                    </Grid>
                    <Grid item xs={2}>
                    <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default DeviceInventory;