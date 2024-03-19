import React from 'react';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import intro from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/tandc';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        boxSize={['40', '48']}
        src="https://avatars.githubusercontent.com/u/104983871?v=4"
        opacity={0.7}
      />
      <Text children="co-founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="MD AFJAL" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children="Hi, I am a full stack developer my mission is to provide best services at rasonable price."
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen npremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={intro}
    ></video>
  </Box>
);

const TandC = ({ termsAndConditions }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Conditions"
      textAlign={['center', 'left']}
      my={'4'}
    ></Heading>
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndConditions}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only Applicable for Cencellation within 7 Days"
      />
    </Box>
  </Box>
);
function About() {
  return (
    <Container maxW={'container.md'} boxShadow={'lg'} padding={'16'}>
      <Heading children="About Us" alignItems={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          we are a video streaming platform with some premium cources available
          for premium users
        </Text>
        <Link to={'/subscribe'}>
          <Button colorScheme="yellow">Checkout Our Plans</Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secure by razorPay"
        />
      </HStack>
    </Container>
  );
}

export default About;
