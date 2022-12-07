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
import getAllCompanyThunk from '../../redux/thunks/getAllCompanyThunk';
import OneCompany from './OneCompany';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));


export default function Company() {
  const dispatch = useDispatch()
    const allCompany = useSelector((store) => store.allCompany);
    useEffect(()=>{
    dispatch(getAllCompanyThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(allCompany);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor: "grey"}}>id</StyledTableCell>
            <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Name</StyledTableCell>
            <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Contact</StyledTableCell>
            <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Balance</StyledTableCell>
            <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Comment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCompany.map((row, index) => (
            <OneCompany row={row} key={index * row?.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}