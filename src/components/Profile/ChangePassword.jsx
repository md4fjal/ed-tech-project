import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { changePasswordSchema } from '../../schemas';
function ChangePassword() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values, e) => {
      e.preventDefault();
    },
  });
  return (
    <Container py="16" minH={'85vh'}>
      <form onSubmit={handleSubmit}>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          children="Change Password"
        />
        <VStack spacing={'8'}>
          <Input
            required
            autoComplete="off"
            value={values.old_password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="enter old password"
            type="password"
            focusBorderColor="yellow.500"
            name="old_password"
          />
          <Text children={errors.old_password} color={'yellow.500'} />
          <Input
            required
            autoComplete="off"
            value={values.new_password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="enter new password"
            type="password"
            focusBorderColor="yellow.500"
            name="new_password"
          />
          <Text children={errors.new_password} color={'yellow.500'} />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ChangePassword;
