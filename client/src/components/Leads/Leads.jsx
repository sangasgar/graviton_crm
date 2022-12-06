import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import getAllLeadsThunk from '../../redux/thunks/allLeadsThunk';
import OneLead from './OneLead';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function Leads() {
  const dispatch = useDispatch()
    const allLeads = useSelector((store) => store.allLeads);
    useEffect(()=>{
    dispatch(getAllLeadsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(allLeads);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Company</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allLeads.map((row, index) => (
            <OneLead row={row} key={index * row?.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}