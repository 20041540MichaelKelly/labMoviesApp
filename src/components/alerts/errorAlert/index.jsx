import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ErrorAlert({ message }) {
  const [open, setOpen] = useState(true);

  const handleClose = async (event) => {
    setOpen(false)
  }

  return (
    <div sx={{ width: '100%' }} spacing={2}>
      <Collapse in={open}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
              
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}>
          {message}</Alert>
      </Collapse>
    </div>
  );
}