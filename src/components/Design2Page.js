import React from 'react';
import { Box, Container, Flex, Tag, Text } from '@chakra-ui/react';
import CustomTag from './CustomTag';

const Design2Page = () => {
  return (
    <Container maxW="90%" mt={20} mb={20}>
      <Box textAlign="Left">
        <Box as="h1" fontSize="3xl" fontWeight="bold" my={5}>
          Conference Name
        </Box>
      </Box>

      <Flex justifyContent="flex-start">
        <Box textAlign="Left" mr={20}>
          <Box as="h2" fontSize="2xl" fontWeight="bold" my={5}>
            Attendance
          </Box>
          {/* Add content related to Attendance here */}
          <Box textAlign="center">
            <Box as="h3" fontSize="xl" my={3}>
              Submission Number
            </Box>
            <Box as="p" fontSize="xl" fontWeight="bold" my={1}>
              1500
            </Box>
          </Box>
        </Box>

        <Box textAlign="Left">
          <Box as="h2" fontSize="2xl" fontWeight="bold" my={5}>
            Paper
          </Box>
          {/* Add content related to Paper here */}
          <Box textAlign="center">
            <Box as="h3" fontSize="xl" my={3}>
              Acceptance Rate
            </Box>
            <Box as="p" fontSize="xl" fontWeight="bold" my={1}>
              50%
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box textAlign="Left" mt={5}>
        <Box as="h3" fontSize="2xl" my={5}>
          Research Trend
        </Box>
        <CustomTag text="Neural Network" number="157" />
        <CustomTag text="Data Analysis" number="131" />
        <CustomTag text="Fake Data" number="137" />
        <CustomTag text="Test" number="157" />
        <CustomTag text="Yeehaw" number="157" />
      </Box>
      
      <Box textAlign="Left" mt={5}>
  <Box as="h2" fontSize="2xl" my={5} mb >
    Paper Connection
  </Box>
  <Box
    bg="gray.200"
    borderRadius="xl"
    width="50em"
    height="30em"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
  </Box>
</Box>

<Box as="h2" fontSize="2xl" my={5}>
    Awarded paper and runner up
  </Box>


  <Flex>
  <Box textAlign="Left" mr={4}>
    <Box as="h3" fontSize="2xl"  my={5}>
      Award
    </Box>
    <Box as="p" fontSize="xl">
      Best Paper
    </Box>
  </Box>

  <Box textAlign="Left" ml={4}>
    <Box as="h3" fontSize="2xl"  my={5}>
      Paper Title
    </Box>
    <Box as="p" fontSize="xl">
      Paper Title That Is Usually Pretty Long
    </Box>
  </Box>
</Flex>



    </Container>
  );
};

export default Design2Page;


