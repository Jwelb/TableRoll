// src/components/CreateCharacter.js
import { Container, SimpleGrid, Grid, GridItem, Card, CardHeader, Heading, Text, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';
import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Center,
} from '@chakra-ui/react'

class abilitiesSelect extends React.Component {
  // Add your character creation form and logic here
  render() {
    return (
      <FormControl>
        <Container bg='red'>
        <Center><Heading>Attriibute Scores</Heading></Center>
            <Select>
                <option>Point Buy</option>
                <option>Standard Array</option>
            </Select>
          <FormHelperText>Give your character a name!</FormHelperText>
        </Container>
        <Container pt='50px'>
          <SimpleGrid columns={6}>
            <FormLabel>STR</FormLabel>
            <Select>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </Select>
            <FormLabel>DEX</FormLabel>
            <Select>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </Select>
            <FormLabel>CON</FormLabel>
            <Select>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </Select>
            <FormLabel>INT</FormLabel>
            <Select>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </Select>
            <FormLabel>WIS</FormLabel>
            <Select>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </Select>
            <FormLabel>CHA</FormLabel>
            <Select>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </Select>
          </SimpleGrid>
        </Container>
      </FormControl>
    );
  }
}

export default abilitiesSelect;