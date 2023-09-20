// src/components/CreateCharacter.js
import { Container, SimpleGrid, Grid, GridItem, Card, CardHeader, Heading, Text, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';
import React from 'react';

class RaceSelect extends React.Component {
  // Add your character creation form and logic here
  render() {
    return (
      <Container>
        <SimpleGrid cspacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          <Card>
            <CardHeader>
              <Heading size='md'>Human</Heading>
              <Image borderRadius='full' boxSize='150px' objectFit='cover' src='https://www.aidedd.org/assets/regles/races/humain.jpg' />
            </CardHeader>
            <CardBody>
              <Text>+1 DEX</Text>
              <Text>+1 STR</Text>
            </CardBody>
            <CardFooter>
              <Button>Select</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Heading size='md'>Human</Heading>
              <Image borderRadius='full' boxSize='150px' objectFit='cover' src='https://www.aidedd.org/assets/regles/races/humain.jpg' />
            </CardHeader>
            <CardBody>
              <Text>+1 DEX</Text>
              <Text>+1 STR</Text>
            </CardBody>
            <CardFooter>
              <Button>Select</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Heading size='md'>Human</Heading>
              <Image borderRadius='full' boxSize='150px' objectFit='cover' src='https://www.aidedd.org/assets/regles/races/humain.jpg' />
            </CardHeader>
            <CardBody>
              <Text>+1 DEX</Text>
              <Text>+1 STR</Text>
            </CardBody>
            <CardFooter>
              <Button>Select</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Heading size='md'>Human</Heading>
              <Image borderRadius='full' boxSize='150px' objectFit='cover' src='https://www.aidedd.org/assets/regles/races/humain.jpg' />
            </CardHeader>
            <CardBody>
              <Text>+1 DEX</Text>
              <Text>+1 STR</Text>
            </CardBody>
            <CardFooter>
              <Button>Select</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Heading size='md'>Human</Heading>
              <Image borderRadius='full' boxSize='150px' objectFit='cover' src='https://www.aidedd.org/assets/regles/races/humain.jpg' />
            </CardHeader>
            <CardBody>
              <Text>+1 DEX</Text>
              <Text>+1 STR</Text>
            </CardBody>
            <CardFooter>
              <Button>Select</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    );
  }
}

export default RaceSelect;