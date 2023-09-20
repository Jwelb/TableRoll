// src/components/CreateCharacter.js
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
    Heading,
} from '@chakra-ui/react'

class NavHeading extends React.Component {
    // Add your character creation form and logic here
    render() {
        return (
            <div>
                <Container centerContent>
                    <Heading>D&D Character Builder</Heading>
                </Container>
                <main>
                    <Container centerContent>
                        <Breadcrumb separator={"/"}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/create'>Create</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/characters'>Characters</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Container>
                </main>
            </div>
        );
    }
}

export default NavHeading;