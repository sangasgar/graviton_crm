import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Company({row}) {
  const [company, setCompany] = React.useState('wq');
  
  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  const companys = ['Spartak', 'Zenit', 'Volga', 'Uralan']
  return (
    <Box sx={{ minWidth: 100}}>
      <FormControl fullWidth>
        <InputLabel>company</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={company}
          label="company"
          onChange={handleChange}
        >
            {companys.map((el, index) =>  <MenuItem value={el}>{el}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}