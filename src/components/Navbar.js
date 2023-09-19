import { Box, Flex, Spacer, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.0rem"
      bg="white"
    >
      <Flex align="center" mr={5} pl={50}>
        <Text fontSize="lg" fontWeight="bold" color = "black">
          PeopleWeaveFA23: Serena Gong
        </Text>
      </Flex>
      
      <Spacer />
      
      <Box
      display="flex"
      mt={{ base: 4, md: 0 }}
      pr={50} 
      >
        <Link as={RouterLink} to="/peopleweavefa23/design1" mr={5} color="black">
          Design 1
        </Link>
        <Link as={RouterLink} to="/peopleweavefa23/design2" color="black">
          Design 2
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;

