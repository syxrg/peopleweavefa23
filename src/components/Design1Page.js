import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Flex,
  VStack,
  Container,
  Button,
  Grid,
  GridItem,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import '../styling/Design1Page.css';

const Design1Page = () => {
  const text = 'Know your research community ...';
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const secondSectionRef = useRef(null);

  const scrollToSecondSection = () => {
    if (secondSectionRef.current) {
      secondSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 100);

    if (index === text.length) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [index, text]);

  return (
    <Flex direction="column" h="200vh" w="100%">
      <Flex direction="column" minH="92vh" bg="white" justify="space-between" onWheel={scrollToSecondSection}>
        <Flex justify="center" align="center" flex="1">
          <VStack spacing={4} alignItems="center">
            <Box as="h1" fontSize="2xl" className="blinking-cursor" style={{ fontSize: '2.5em', fontWeight: 'bold' }} p={15}>
              {currentText}
            </Box>

            <VStack spacing={2}>
              <Button colorScheme="blue" w="20em" h="3em">
                Log In
              </Button>
              <Button colorScheme="blue" w="20em" h="3em">
                Create Account
              </Button>
            </VStack>
          </VStack>
        </Flex>
        <Flex justify="center" align="center" mb={3}>
          <Box textAlign="center" onClick={scrollToSecondSection} style={{ cursor: 'pointer' }}>
            <Box>
              <p style={{ marginBottom: '0.1em', fontSize: '1.5em' }}>Learn More</p>
              <p style={{ marginTop: '0.1em', fontSize: '1.5em' }}>&#8595;</p>
            </Box>
          </Box>
        </Flex>
      </Flex>
      {/* Second Section */}
      <Flex bg="lightblue" justify="center" align="center" ref={secondSectionRef}>
        <Container maxW="90%" mt={20}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem colSpan={1}>
              {/* Left Grid 1 */}
              <Box mb={5} p={10}>
                <Box as="h2" fontWeight="bold" fontSize="2em">
                  Discover relevant people and papers
                </Box>
                <Box mt={4} fontSize="1.2em">
                  Our AI recommendation tools will give you people and research papers relevant to you and your research.
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              {/* Right Grid 1 */}
              <Box>
                <Box mt={4}>
                  <Box
                    borderWidth="1px"
                    borderColor="black"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    p={2}
                    width="100%"
                    bg="white"
                  >
                    <Input
                      type="text"
                      placeholder="Search..."
                      flex="1"
                      outline="none"
                      border="none"
                      _focus={{ outline: 'none' }}
                    />
                    <IconButton
                      icon={<SearchIcon />}
                      aria-label="Search"
                      variant="solid"
                      colorScheme="teal"
                      ml={2}
                    />
                  </Box>
                </Box>
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              {/* Left Grid 2 */}
              <Box mb={5} p={10}>
                <Box
                  bg="gray.200"
                  borderRadius="xl"
                  width="30em"
                  height="20em"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box as="h2" fontWeight="bold" fontSize="2em">
                    Placeholder
                  </Box>
                </Box>
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              {/* Right Grid 2 */}
              <Box mb={5} p={10}>
                <Box as="h2" fontWeight="bold" fontSize="2em">
                  Put yourself out there
                </Box>
                <Box mt={4} fontSize="1.2em">
                  Trying to look for new opportunities? Using our profile and posting features you can showcase your ideas and accomplishments and learn about other people
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              {/* Left Grid 3 */}
              <Box mb={5} p={10}>
                <Box as="h2" fontWeight="bold" fontSize="2em">
                  Connect with like-minded people
                </Box>
                <Box mt={4} fontSize="1.2em">
                  Using our messaging system you can reach out to other researches to make connections with like-minded people and industry professionals
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              {/* Right Grid 3 */}
              <Box mb={5} p={10}>
                <Box
                  bg="gray.200"
                  borderRadius="xl"
                  width="30em"
                  height="20em"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box as="h2" fontWeight="bold" fontSize="2em">
                    Placeholder
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Flex>
    </Flex>
  );
};

export default Design1Page;
