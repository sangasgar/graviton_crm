import * as React from 'react';
import { Link } from "react-router-dom";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));
export default function CustomizedTables({row}) {
  return (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell >
              <StyledTableCell align="right"><Link to={`/leads/${row.id}`} >{row.lead_name}</Link></StyledTableCell>
              <StyledTableCell align="right">{row.lead_phone}</StyledTableCell>
              <StyledTableCell align="right">{row.Status?.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Company?.name}</StyledTableCell>
              <StyledTableCell align="right">{row?.comment}</StyledTableCell>
            </StyledTableRow>
            
          )}
        
    