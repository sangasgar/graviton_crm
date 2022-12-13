/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OneLead from './OneLead';
import getAllLeadsThunk from '../../redux/thunks/allLeadsThunk';

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
  const dispatch = useDispatch();
  const allLeads = useSelector((store) => store.allLeads);
  const [vauleSort, setValueSort] = useState(false);
  useEffect(() => {
    dispatch(getAllLeadsThunk(vauleSort));
  }, [dispatch, vauleSort]);
  const handleChange = (event) => {
    setValueSort(event.target.value);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ backgroundColor: '#0dd6c9' }}>id</StyledTableCell>
            <StyledTableCell align="right" style={{ backgroundColor: '#0dd6c9' }}>Name</StyledTableCell>
            <StyledTableCell align="right" style={{ backgroundColor: '#0dd6c9' }}>Contact</StyledTableCell>
            <StyledTableCell align="right" style={{ backgroundColor: '#0dd6c9' }}>Comment</StyledTableCell>
            <StyledTableCell align="right" style={{ backgroundColor: '#0dd6c9' }}>
              Status
              {' '}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vauleSort}
                label="status"
                onChange={handleChange}
              >
                <MenuItem value={1}>Активный</MenuItem>
                <MenuItem value={2}>Передан</MenuItem>
                <MenuItem value={3}>В работе</MenuItem>
                <MenuItem value={4}>Возвращен</MenuItem>
                <MenuItem value={5}>Неактивный</MenuItem>
              </Select>
            </StyledTableCell>
            <StyledTableCell align="right" style={{ backgroundColor: '#0dd6c9' }}>Company</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allLeads.map((row, index) => (
            <OneLead row={row} key={index * row?.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
