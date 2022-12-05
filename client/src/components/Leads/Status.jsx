import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Status() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
    console.log(event.target.value);
  };

  const statuts = ['активный', 'передан', 'возвращен', 'в работе', 'неактивный']

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="status"
          onChange={handleChange}
        >
            {statuts.map((el, index) =>  <MenuItem value={el}>{el}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}