import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonsComponent(props) {

const {onClick, label} = props  

  return (
    <Stack spacing={2} direction="row">
      
      <Button variant="contained" onClick={onClick}>{label}</Button>
     
    </Stack>
  );
}