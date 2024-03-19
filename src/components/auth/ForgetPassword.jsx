import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useFormik } from 'formik';
import { forgetPasswordSchema } from '../../schemas';

function ForgetPassword() {
  // const [email, setEmail] = useState('');
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgetPasswordSchema,
    onSubmit: (values, e) => {
      e.preventDefault();
    },
  });
  return (
    <Container h={'85vh'} py={'16'}>
      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <Heading children={'Forget Password'} my={'12'} />
        <VStack spacing={'8'} w={'full'} justifyContent={'center'}>
          <Box>
            <Input
              required
              autoComplete="off"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
              w={'full'}
            />
            <Text children={errors.email} color={'yellow.500'} />
          </Box>

          <Button w={'full'} colorScheme="yellow" type="submit">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ForgetPassword;
