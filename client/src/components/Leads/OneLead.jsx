/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import SendCompanyModal from './SendCompanyModal';

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

export default function CustomizedTables({ row }) {
  const create = row.createdAt?.slice(0, row.createdAt.length - 8).replace('T', ' ');
  const update = row.updatedAt?.slice(0, row.createdAt.length - 8).replace('T', ' ');
  const [sendCompanyVisible, setSendCompanyVisible] = React.useState(false);

  return (
    <StyledTableRow key={row.name}>
      <StyledTableCell component="th" scope="row">
        {row.id}
      </StyledTableCell>
      <StyledTableCell align="right"><Link to={`/leads/${row.id}`}>{row.lead_name}</Link></StyledTableCell>
      <StyledTableCell align="right">{row.lead_phone}</StyledTableCell>
      <StyledTableCell align="right">{create}</StyledTableCell>
      <StyledTableCell align="right">{update}</StyledTableCell>
      <StyledTableCell align="right"><Link to={`/leads/${row.id}`}>{row?.comment}</Link></StyledTableCell>
      <StyledTableCell align="right">{row.Status?.name}</StyledTableCell>
      <StyledTableCell align="right">
        {row.Status.name === 'Активный' ? (<Button color="success" variant="contained" onClick={() => setSendCompanyVisible(true)}>Передать в компанию</Button>)
          : (
            <Button variant="contained" disabled>
              {row?.Company?.name ? row?.Company?.name : 'Отсутсвует'}
            </Button>
          )}
      </StyledTableCell>
      <SendCompanyModal idLead={row?.id} open={sendCompanyVisible} onClose={() => setSendCompanyVisible(false)} />
    </StyledTableRow>

  );
}
