import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';

import { DiGithub } from 'react-icons/di';

function Footer() {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'15vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} w={'full'}>
          <Heading children={'All Righs Reserved'} color={'white'} />
          <Heading
            children={'@md4fjal'}
            color={'yellow.400'}
            fontFamily={'body'}
            size={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'35'}
        >
          <a href="https://github.com/md4fjal" target="blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://github.com/md4fjal" target="blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/md4fjal" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Footer;
