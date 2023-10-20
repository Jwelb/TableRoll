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
} from '@chakra-ui/react';

function ClassSelect() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const apiUrl = 'https://www.dnd5eapi.co/api/classes'; // Use the correct API endpoint here
    const apiURLClassinfo = 'https://www.dnd5eapi.co';
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

  const filteredClasses = classes.filter((classInfo) => {
    // Perform case-insensitive search on class names
    return classInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <p>Loading class information...</p>;
  }

  return (
    <FormControl>
      <FormLabel>Search Class</FormLabel>
      <Input
        placeholder="Search for a class"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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

export default ClassSelect;
