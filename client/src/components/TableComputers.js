import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const AllComputers = (props) => {
  const [allComputers, setAllComputers] = React.useState([]);

  React.useEffect(()=>{
    axios.get("http://localhost:8000/computers")
      .then((res)=>{
        console.log(res);
        console.log(res.data);
        setAllComputers(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Computer Name</TableCell>
            <TableCell align="right">Asset Number</TableCell>
            <TableCell align="right">CPU&nbsp;</TableCell>
            <TableCell align="right">Memory&nbsp;</TableCell>
            <TableCell align="right">Operating System&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allComputers.map((computer, index) => {
            return (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {computer.computerName}
              </TableCell>
              <TableCell align="right">{computer.assetNumber}</TableCell>
              <TableCell align="right">{computer.cpu}</TableCell>
              <TableCell align="right">{computer.memory}</TableCell>
              <TableCell align="right">{computer.operatingSystem}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AllComputers;