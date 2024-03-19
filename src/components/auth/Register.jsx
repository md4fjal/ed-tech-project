import {
  Container,
  Heading,
  VStack,
  FormLabel,
  Input,
  Box,
  Button,
  Avatar,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../schemas';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: '#fff',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

function Register() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values, e) => {
      e.preventDefault();
      console.log(values);
    },
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  const [imgpreview, setImgpreview] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgpreview(reader.result);
    };
    setImage(file);
  };
  return (
    <Container h={'85vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'4'}>
        <Heading textTransform={'uppercase'} children={'Registration '} />
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <Box my={'2'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imgpreview} size={'lg'} />
          </Box>
          <Box my={'2'} h={'60px'}>
            {/* <FormLabel htmlFor="name" children=" Full Name" /> */}
            <Input
              required
              autoComplete="off"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="enter name"
              type="text"
              focusBorderColor="yellow.500"
            />
            <Text children={errors.name} color={'yellow.500'} />
          </Box>
          <Box my={'2'} h={'60px'}>
            {/* <FormLabel htmlFor="email" children="Email Address" /> */}
            <Input
              required
              autoComplete="off"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="enter email ex- abc@xyz"
              type="email"
              focusBorderColor="yellow.500"
            />
            <Text children={errors.email} color={'yellow.500'} />
          </Box>
          <Box my={'2'} h={'60px'}>
            {/* <FormLabel htmlFor="password" children="Password" /> */}
            <Input
              required
              autoComplete="off"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="enter password"
              type="password"
              focusBorderColor="yellow.500"
            />
            <Text children={errors.password} color={'yellow.500'} />
          </Box>

          <Box my={'2'}>
            <FormLabel htmlFor="choose" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="choose"
              type="file"
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
          <Button my={'2'} colorScheme="yellow" type="submit">
            SignUp
          </Button>
          <Box>
            Already An User?{' '}
            <Link to={'/login'}>
              <Button variant={'link'} colorScheme="yellow">
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Register;
