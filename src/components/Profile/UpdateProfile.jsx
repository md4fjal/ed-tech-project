import { Button, Container, Input, VStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';

function UpdateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container py="16" minH={'85vh'}>
      <form>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          children="Update Profile"
        />
        <VStack spacing={'8'}>
          <Input
            autoComplete="off"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            focusBorderColor="yellow.500"
          />

          <Button w={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default UpdateProfile;
