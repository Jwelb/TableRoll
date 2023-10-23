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

class Description extends React.Component {
  // Add your character creation form and logic here
  render() {
    return (
      <FormControl>
        <Container bg='red'>
          <FormLabel>Description</FormLabel>
          <Input />
          <FormHelperText>Describe your character</FormHelperText>
        </Container>
        <Container pt='50px'>
          <Input />
        </Container>
      </FormControl>
    );
  }
}

export default Description;