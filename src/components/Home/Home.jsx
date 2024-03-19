import React from 'react';
import {
  Button,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Box,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import intro from '../../assets/videos/intro.mp4';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          alignItems="center"
          justifyContent={['center', 'space-between']}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'6'}
          >
            <Heading
              children={'LEARN FROM THE EXPERTS'}
              size={'md'}
              textAlign={['center', 'left']}
            />
            <Text
              fontFamily={'cursive'}
              fontSize={'md'}
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'sm'} src={vg} objectFit={'contain'} />
        </Stack>
      </div>
      <Box>
        <Heading
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
          children="OUR BRANDS"
        />
      </Box>
      <div className="container2">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={intro}
        ></video>
      </div>
    </section>
  );
}

export default Home;
