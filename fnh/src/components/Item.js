import { Button, Paper, Typography } from '@mui/material';

function Item({ item }) {
  return (
    <Paper
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '60%',
        height: '75vh',
        margin: '10px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '8px',
        }}
      />
      <Typography variant="h6" style={{ marginTop: '10px' }}>
        {item.title}
      </Typography>
    </Paper>
  );
}

export default Item;
