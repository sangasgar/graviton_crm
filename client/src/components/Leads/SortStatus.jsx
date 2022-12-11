/* eslint-disable react/react-in-jsx-scope */
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function SortStatus() {
  const [vauleSort, setValueSort] = useState(false);

  const handleChange = (event) => {
    setValueSort(event.target.value);
    // allLeads = allLeads.filter(el => el.Status.id === vauleSort)
    // dispatch(sortLeadsAC(vauleSort))
  };
  return (
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
  );
}
