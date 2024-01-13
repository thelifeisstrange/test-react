// ModalType1.js
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Dangerous } from '@mui/icons-material';
import { Button } from './Button';

function ModalType1({ card, onClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '60vh',
        bgcolor: 'background.paper',
        border: '2px solid gray',
        boxShadow: 24,
        borderRadius: '13px',
        paddingX: 3,
        paddingY: 1,
        overflowY: 'auto',
      };
  return (
    <Box sx={style}>
      <Stack direction={'row'} justifyContent={'space-between'} mb={1}>
        <Typography variant='h6' color='text.primary'>
          {card.label || 'Default Label'}
        </Typography>
        <Button
          endIcon={<Dangerous />}
          onClick={onClose}
          size='small'
          variant='contained'
          color='error'
        >
          Close
        </Button>
      </Stack>
      <Typography variant='h6' color='text.primary'>
        {card.subtitle || 'Default Subtitle'}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2, overflowY: 'auto', maxHeight: '60vh' }}>
        {card.description || 'Default Description'}
      </Typography>
    </Box>
  );
}

export default ModalType1;


