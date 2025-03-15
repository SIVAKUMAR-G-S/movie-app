import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ height: '40px' }}>
        <img 
          src="/logo.png" 
          alt="Netflix" 
          style={{ 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
      </Box>
    </Link>
  );
};

export default Logo;