import React, { useState } from 'react';
import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  Button,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container minH={'85vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'4'}>
        <Heading children="Contact Us" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              autoComplete="off"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Abc"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              required
              autoComplete="off"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@xyz"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              autoComplete="off"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="write something..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={'3'} colorScheme="yellow" type="submit">
            Send
          </Button>
          <Box>
            Request A Course{' '}
            <Link to={'/request'}>
              <Button variant={'link'} colorScheme="yellow">
                Click Here
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Contact;
