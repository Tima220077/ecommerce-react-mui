import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry'; // Import Masonry component from @mui/lab
import img5 from '/Timka/Coding/redux-practice/src/img5.avif';
import img6 from '/Timka/Coding/redux-practice/src/img6.avif';
import img7 from '/Timka/Coding/redux-practice/src/img7.avif';
import img8 from '/Timka/Coding/redux-practice/src/img8.avif';
import img9 from '/Timka/Coding/redux-practice/src/img9.avif';
import img10 from '/Timka/Coding/redux-practice/src/img10.avif';
import img11 from '/Timka/Coding/redux-practice/src/img11.avif';
import img12 from '/Timka/Coding/redux-practice/src/img12.avif';
import img4 from '/Timka/Coding/redux-practice/src/img4.avif';
import img13 from '/Timka/Coding/redux-practice/src/img13.avif';
import img14 from '/Timka/Coding/redux-practice/src/img14.avif';

export default function ImageMasonry() {
  const itemData = [
    {
      img: img4, // Local image import
      title: 'Bike 2',
    },
    {
      img: img5, // Local image import
      title: 'Bike 3',
    },
    {
      img: img6, // Local image import
      title: 'Bike 4',
    },
    {
      img: img7, // Local image import
      title: 'Bike 5',
    },
    {
      img: img8, // Local image import
      title: 'Bike 6',
    },
    {
      img: img9, // Local image import
      title: 'Bike 7',
    },
    {
      img: img10, // Local image import
      title: 'Bike 8',
    },
    {
      img: img11, // Local image import
      title: 'Bike 9',
    },
    {
      img: img12, // Local image import
      title: 'Bike 10',
    },
    {
      img: img13, // Local image import
      title: 'Bike 11',
    },
    
  ];

  return (
    <Box sx={{ width: 1000, minHeight: 1000 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=400&auto=format&dpr=2 2x`}
              src={`${item.img}?w=400&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
