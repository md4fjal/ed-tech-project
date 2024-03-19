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

function Request() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  return (
    <Container minH={'85vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'4'}>
        <Heading children="Request New Course" />
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              autoComplete="off"
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain The Course..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={'3'} colorScheme="yellow" type="submit">
            Send
          </Button>
          <Box>
            See Available Cources{' '}
            <Link to={'/courses'}>
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

export default Request;
