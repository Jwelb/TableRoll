// src/components/CreateCharacter.js
import { Container, SimpleGrid, Grid, GridItem, Card, CardHeader, Heading, Text, CardBody, CardFooter, Button, Image,Box,Center } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
//WORK IN PROGRESS, but when you add equipment you should be able to press the button and it would show up as a tag under equipment. I think that will look good. 
function Equipment() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // Add your character creation form and logic here
  const apiUrl = 'https://www.dnd5eapi.co/api/equipment'; // Use the correct API endpoint here
  const apiURLClassinfo = 'https://www.dnd5eapi.co';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response
        // data is the data so what is data.results?
        setClasses(data.results); // Assuming class data is in the 'results' field
        console.log(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleClassButtonClick = async (classUrl) => {
    try {
      const response = await fetch(`${apiURLClassinfo}${classUrl}`);
      const classData = await response.json();
      console.log(response)
      
      setSelectedClass(classData);
    } catch (error) {
      console.error('Error fetching class details:', error);
    }
  };

  if(loading){
    return <p>Loading...</p>
  }
  const filteredClasses = classes.filter((classInfo) => {
    // Perform case-insensitive search on class names
    return classInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

    return (
      <FormControl>
        <Container>
          <FormLabel>Equipment</FormLabel>
          <Input
          placeholder="Search for equipment"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FormHelperText>Give your character equipment</FormHelperText>
        </Container>
        <SimpleGrid columns={2} spacing={2}>
      {filteredClasses.map((classInfo) => (
        <Box key={classInfo.index}>
        <Center>
          <Button size ='lg' onClick={() => handleClassButtonClick(classInfo.url)}>
            {classInfo.name} 
          </Button>
        </Center>
        </Box>
      ))}
    </SimpleGrid>
        <Container pt='50px'>
          <FormLabel>Enter</FormLabel>
          <Input />
        </Container>
      </FormControl>
    );
}

export default Equipment;