import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <Container minH={'85vh'} p={'16'}>
      <Heading textAlign={'center'} my={'8'} children="You Have Pro Pack" />
      <VStack
        boxShadow={'md'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          w={'full'}
          bg={'yellow.400'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0 ' }}
        >
          <Text color="black" children="Payment Succcess" />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing={'8'}>
            <Text>
              Congatulation You are a Pro Member, You have Access to Premium
              Content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button variant={'ghost'}>Go To Profile</Button>
        </Link>
        <Heading size={'xs'}>Reference: doirgtoirgjhoisrghjsorgj</Heading>
      </VStack>
    </Container>
  );
}

export default PaymentSuccess;
