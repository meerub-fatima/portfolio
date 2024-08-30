import React from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Image, useBreakpointValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Responsive font sizes for different screen sizes
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '4xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  // Modal for more information
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box  w="100vw" p={4}>
      <Box
        bgGradient="linear(to-r, teal.500, blue.500)"
        borderRadius="lg"
        p={6}
        textAlign="center"
        shadow="2xl"
        mb={10}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://st4.depositphotos.com/1001959/20948/i/450/depositphotos_209482504-stock-photo-close-portrait-stylish-teenager-dressed.jpg"
          alt="Profile Picture"
          objectFit="cover"
          mx="auto"
          border="4px solid white"
        />
        <Heading as="h1" size={headingSize} mb={4} color="white">
          Welcome to My Portfolio
        </Heading>
        <Text fontSize={textSize} mb={6} color="whiteAlpha.800">
          Hi, I'm [Your Name], a passionate web developer with a knack for creating beautiful and functional websites. 
          Explore my work and get to know more about what I do.
        </Text>
        <HStack spacing={4} justify="center">
          <Button
            as={Link}
            to="/projects"
            colorScheme="teal"
            size="lg"
            _hover={{ bg: 'teal.600', transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
            onClick={onOpen}
          >
            View Projects
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            size="lg"
            borderColor="white"
            color="white"
            _hover={{ borderColor: 'teal.600', color: 'teal.600', transition: 'all 0.3s ease' }}
          >
            Contact Me
          </Button>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Projects Overview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Here are some of my recent projects...</Text>
            {/* Add more content or components here */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
