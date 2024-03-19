import {
  Container,
  Heading,
  VStack,
  Input,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (e, values) => {
      e.preventDefault();
      console.log(values);
    },
  });
  return (
    <Container h={'85vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading children={'Welcome To Code Bundlers '} />
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <Box my={'4'} h={'60px'}>
            {/* <FormLabel htmlFor="email" children="Email Address" /> */}
            <Input
              required
              autoComplete="off"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
            <Text children={errors.email} color={'yellow.500'} />
          </Box>
          <Box my={'4'} h={'60px'}>
            {/* <FormLabel htmlFor="password" children="Password" /> */}
            <Input
              required
              autoComplete="off"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Password"
              type="password"
              focusBorderColor="yellow.500"
            />
            <Text children={errors.password} color={'yellow.500'} />
          </Box>
          <Box>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button my={'3'} colorScheme="yellow" type="submit">
            Login
          </Button>
          <Box>
            New User?{' '}
            <Link to={'/register'}>
              <Button variant={'link'} colorScheme="yellow">
                SignUp
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Login;
