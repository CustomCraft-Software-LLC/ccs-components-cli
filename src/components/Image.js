import React from 'react';
import Box from '@mui/material/Box';

const styles = {
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const Image = ({ shape, width, height, src, alt }) => {
  const shapeStyles = {
    circle: { width, height, borderRadius: '50%', overflow: 'hidden' },
    square: { width, height },
    rounded: { width, height, borderRadius: '16px', overflow: 'hidden' },
    responsive: { width: '100%', height: 'auto' },
  };

  const appliedStyle = shapeStyles[shape] || shapeStyles.square;

  return (
    <Box sx={appliedStyle}>
      <img src={src} alt={alt} style={styles.img} />
    </Box>
  );
};

export default Image;