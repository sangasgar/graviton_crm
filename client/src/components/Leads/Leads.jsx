import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import getAllLeadsThunk from '../../redux/thunks/allLeadsThunk';
import OneLead from './OneLead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


function Leads () {
    const dispatch = useDispatch()
    const allLeads = useSelector((store) => store.allLeads);
    console.log(allLeads);
    useEffect(()=>{
    dispatch(getAllLeadsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table" >
          <TableHead >
            <TableRow>
              <StyledTableCell style={{backgroundColor: "grey"}}>id</StyledTableCell>
              <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Name</StyledTableCell>
              <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Contact</StyledTableCell>
              <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Status</StyledTableCell>
              <StyledTableCell align="right" style={{backgroundColor: "grey"}}>Company</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody >
          {allLeads.map((row, index) => (
            <OneLead row={row} key={index * row?.id}/>
          ))}
            </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Leads
