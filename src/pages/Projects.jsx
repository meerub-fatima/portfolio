import { Box, VStack, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <VStack spacing={4} align="center" justify="center" h="100vh">
        <Spinner size="xl" />
        <Text>Loading...</Text>
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack spacing={4} align="center" justify="center" h="100vh">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </VStack>
    );
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Todo Item
        </Text>
        <Text>ID: {data.id}</Text>
        <Text>Title: {data.title}</Text>
        <Text>Completed: {data.completed ? 'Yes' : 'No'}</Text>
      </VStack>
    </Box>
  );
};

export default Projects;
