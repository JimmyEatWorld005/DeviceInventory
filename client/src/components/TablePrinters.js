import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const AllPrinters = (props) => {
  const [allPrinters, setAllPrinters] = React.useState([]);

  React.useEffect(()=>{
    axios.get("http://localhost:8000/printers")
      .then((res)=>{
        console.log(res);
        console.log(res.data);
        setAllPrinters(res.data)
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
            <TableCell>Printer Name</TableCell>
            <TableCell align="right">Asset</TableCell>
            <TableCell align="right">IP Address&nbsp;</TableCell>
            <TableCell align="right">Type&nbsp;</TableCell>
            <TableCell align="right">Driver&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPrinters.map((printer, index) => {
            return (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {printer.printerName}
              </TableCell>
              <TableCell align="right">{printer.assetNumber}</TableCell>
              <TableCell align="right">{printer.ipAddress}</TableCell>
              <TableCell align="right">{printer.printerType}</TableCell>
              <TableCell align="right">{printer.printerDriver}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AllPrinters;