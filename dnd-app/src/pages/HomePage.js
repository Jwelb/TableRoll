// src/components/CreateCharacter.js
import { Container, SimpleGrid, Grid, GridItem, Card, CardHeader, Heading, Text, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';
import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Highlight,
  AbsoluteCenter,
  Box,
  Link,
} from '@chakra-ui/react'

class HomePage extends React.Component {
  // Add your character creation form and logic here
  render() {
    return (
        <Box position='relative' h='100vh'>
            <AbsoluteCenter pr='40vw' pb='20vh' axis='both'>
            <Heading>Create a Character</Heading>
            <Button><Link href='/create'>Create</Link></Button>
            </AbsoluteCenter>
        <AbsoluteCenter ml='20vw' p='4' axis='both'>
        <Heading lineHeight='tall'>
        <Highlight
          query='build'
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
        >
          With this Dungeon and Dragon Character Buiilder app, you can build your fantasy.
        </Highlight>
      </Heading>
      </AbsoluteCenter>
      </Box>
    );
  }
}

export default HomePage;