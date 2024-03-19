import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const params = useParams();
  console.log(params.token);
  return (
    <Container h={'85vh'} py={'16'}>
      <form style={{ width: '100%' }}>
        <Heading children={'Reset Password'} my={'12'} />
        <VStack spacing={'8'}>
          <Input
            required
            autoComplete="off"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ResetPassword;
