// Cards.js
import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Box, Typography, Modal, Stack } from '@mui/material';
import { Dangerous } from '@mui/icons-material';
import { Button } from './Button';
import cardsContentOne from '../helpers/cardsContentOne.json';
import cardsContentTwo from '../helpers/cardsContentTwo.json';
import cardsContentThree from '../helpers/cardsContentThree.json';

function Cards() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (cardInfo) => {
    setSelectedCard(cardInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedCard(null); // Clear selected card when closing the modal
    setOpen(false);
  };

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
  const headingStyle = {
    color: '#1f3557',

    fontSize: '2.5rem',
    fontWeight: 'bold',
    
    
    
    
    textAlign: 'center',
    // Add other custom styles as needed
  };

  return (
    <div className='cards'>
      <Typography variant="h2" gutterBottom style={headingStyle}>
Our Services        </Typography>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* Render cards from cardsContentOne */}
          <ul className='cards__items'>
            {cardsContentOne.map((card) => (
              <CardItem
              key={card.id}
              src={`images/${card.customImageFileName}.png`} // Use customImageFileName for dynamic image source
              label={card.subtitle}
              
              // onClick={() => handleOpen(card)}
            />
            ))}
          </ul>
          <ul className='cards__items'>
            {cardsContentOne.map((card) => (
              <CardItem
              key={card.id}
              src={`images/${card.customImageFileName}.png`} // Use customImageFileName for dynamic image source
              label={card.subtitle}
              // onClick={() => handleOpen(card)}
            />
            ))}
          </ul>
          <ul className='cards__items'>
            {cardsContentOne.map((card) => (
              <CardItem
              key={card.id}
              src={`images/${card.customImageFileName}.png`} // Use customImageFileName for dynamic image source
              label={card.subtitle}
              // onClick={() => handleOpen(card)}
            />
            ))}
          </ul>
          {/* Render cards from cardsContentTwo */}
          

          {/* Modal for displaying card details */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Stack direction={'row'} justifyContent={'space-between'} mb={1}>
                <Typography variant='h6' color='text.primary'>
                  {selectedCard ? selectedCard.title : 'Default Title'}
                </Typography>
                <Button
                  endIcon={<Dangerous />}
                  onClick={handleClose}
                  size='small'
                  variant='contained'
                  color='error'
                >
                  Close
                </Button>
              </Stack>
              {/* <Typography variant='h6' color='text.primary'>
                {selectedCard ? selectedCard.subtitle : 'Default Subtitle'}
              </Typography> */}
              <Typography id='modal-modal-description' sx={{ mt: 2, overflowY: 'auto', maxHeight: '60vh' }}>
                {selectedCard ? selectedCard.description : 'Default Description'}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Cards;
