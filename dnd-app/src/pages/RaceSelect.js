// src/components/CreateCharacter.js
import { Container, SimpleGrid, Grid, GridItem, Card, CardHeader, Heading, Text, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';
import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

class RaceSelect extends React.Component {
  // Add your character creation form and logic here
  render() {
    return (
      <FormControl>
        <Container bg='red'>
          <FormLabel>Characters Name</FormLabel>
          <Input />
          <FormHelperText>Give your character a name!</FormHelperText>
        </Container>
        <Container pt='50px'>
          <FormLabel>Search</FormLabel>
          <Input />
          <SimpleGrid pt='10px' columns={1} spacing={10}>
            <Button height='100px'>
              <Heading>Human</Heading>
            </Button>
          </SimpleGrid>
        </Container>
      </FormControl>
    );
  }
}

export default RaceSelect;