import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Link as={RouterLink} to="/design1" color="white" mr={4}>
        Design 1
      </Link>
      <Link as={RouterLink} to="/design2" color="white">
        Design 2
      </Link>
    </Box>
  );
};

export default Navbar;
