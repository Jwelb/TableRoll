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

class Equipment extends React.Component {
  // Add your character creation form and logic here
  render() {
    return (
      <FormControl>
        <Container>
          <FormLabel>Equipment</FormLabel>
          <Input />
          <FormHelperText>Give your character equipment</FormHelperText>
        </Container>
        <Container pt='50px'>
          <FormLabel>Enter</FormLabel>
          <Input />
        </Container>
      </FormControl>
    );
  }
}

export default Equipment;