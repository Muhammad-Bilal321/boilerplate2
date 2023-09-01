import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectComponent(props) {
//   const [active, setActive] = React.useState(false);

 const {onChange,value,label,options,darkMode } = props

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl >
        <InputLabel id="demo-simple-select-label"
         sx={{ color: darkMode ? 'white' : 'black' }}>Approve</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
          sx={{
            color: darkMode ? 'white' : 'black', // Adjust text color based on dark mode
            '& .MuiInputBase-root': {
              color: darkMode ? 'white' : 'black', // Adjust text color of select value based on dark mode
            },
            '& .MuiSelect-icon': {
              color: darkMode ? 'white' : 'black', // Adjust color of select icon based on dark mode
            },
          }}
        >
        {options.map((x,i)=>(
            <MenuItem key={i} value={x.value}>{x.label}</MenuItem>
        ))}

          {/* 
          <MenuItem value={true}>Active</MenuItem> */}
        
        </Select>
      </FormControl>
    </Box>
  );
}