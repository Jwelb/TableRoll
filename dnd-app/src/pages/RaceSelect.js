import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  SimpleGrid,
  Center,
  Container,
} from '@chakra-ui/react';

function RaceSelect() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const apiUrl = 'https://www.dnd5eapi.co/api/races'; // Use the correct API endpoint here
  const apiURLClassinfo = 'https://www.dnd5eapi.co';

  //Api request UseEffect funciton
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response
        setClasses(data.results); // Assuming class data is in the 'results' field
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  //handles the click when someone clicks on a race (should save it to the state object and display information pertaining to the race)
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
  // filiters the class so if the user puts lower case or whatever in a class search it still searches it. 
  const filteredClasses = classes.filter((classInfo) => {
    // Perform case-insensitive search on class names
    return classInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <p>Loading race information...</p>;
  }

  return (
    <FormControl>
      <Container pt ='10px'>
      <Center>
      <FormLabel>Select Race or Subrace</FormLabel>
      </Center>
      <Input
        placeholder="Search for race"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </Container>
      {filteredClasses.map((classInfo) => (
        <Container pt ='10px'>
        <SimpleGrid columns={1} spacing={10}>
        <Button key={classInfo.index} size='lg' onClick={() => handleClassButtonClick(classInfo.url)}>
          {classInfo.name} 
          </Button>
          </SimpleGrid>
          </Container>
      ))}

      {selectedClass && (
        <Box mt={4}>
          <Text fontWeight="bold">{selectedClass.name}</Text>
          <Text>{selectedClass.name}</Text>
          {/* Add more fields from the class data as needed */}
        </Box>
      )}
    </FormControl>
  );
}

export default RaceSelect;