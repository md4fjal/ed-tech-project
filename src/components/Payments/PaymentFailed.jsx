import React from 'react';
import { Container, VStack, Button, Heading } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PaymentFailed() {
  return (
    <Container h={'85vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading children="Payment Failed" />
        <Link to={'/subscribe'}>
          <Button variant="ghost">Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
}

export default PaymentFailed;
