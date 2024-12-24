import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyCard = ({ title, description, image, price, onBuy }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#2E3B55',
        color: '#E6A23C',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <div style={{backgroundColor: "white"}}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`Image of ${title}`}
        sx={{
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          objectFit: 'contain',
        }}
      />
      </div>
      
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: 700, letterSpacing: '.1rem', textAlign: 'center' }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
            margin: '10px 0',
          }}
        >
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', padding: '16px' }}>
        <Button
          size="medium"
          variant="contained"
          sx={{
            backgroundColor: '#E6A23C',
            color: '#2E3B55',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#F0B67F',
            },
          }}
          onClick={onBuy}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};


export default MyCard;
