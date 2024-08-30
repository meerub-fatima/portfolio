import { Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Correct import for RouterLink
import React from 'react';

const Header = () => {
  return (
    <SimpleGrid alignItems="center" color="#fff" bg="#000" columns="2" p="4">
      <GridItem fontSize="1.2rem">
        <RouterLink to="/">Logo.dev</RouterLink> {/* Added the 'to' prop */}
      </GridItem>
      <GridItem>
        <Flex align="center" justify="space-evenly">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default Header;
