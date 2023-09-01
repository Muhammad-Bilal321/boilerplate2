import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputComponent(props) {

const {onChange,value,label,type,darkMode} = props

const inputClasses = darkMode ? 'input-dark' : 'input-light'; // Add the condition here
  return (
    <div className='my-4'>
        <form onChange={onChange}> 
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField variant="outlined" label={label}  value={value} type={type} className={inputClasses}/>
    </Box>
    </form>
    </div>
  );
}