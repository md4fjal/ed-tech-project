import React from 'react';
import { Container, VStack, Button, Heading } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PageNoteFound() {
  return (
    <Container h={'85vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading children="Page Not Found" />
        <Link to={'/'}>
          <Button variant="ghost">Go To Home</Button>
        </Link>
      </VStack>
    </Container>
  );
}

export default PageNoteFound;
