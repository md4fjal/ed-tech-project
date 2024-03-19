import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../auth/Register';

function Profile() {
  const user = {
    name: 'Afjal',
    email: 'afjal@123',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'fjodf',
        poster: 'ijfijfd',
      },
    ],
  };

  const removeFromPlaylist = id => {};
  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
  };
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Container minH="85vh" maxW="container.lg" py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        p={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name:" fontWeight="bold" />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email:" fontWeight="bold" />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Since:" fontWeight="bold" />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color="yellow.500" variant={'unstyled'}>
                  Cencle Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button colorScheme="yellow">Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button colorScheme="yellow">Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map((element, index) => (
            <VStack w={'48'} m={'2'} key={element.course}>
              <Image boxSize="full" objectFit="contain" src={element.poster} />
              <HStack>
                <Link to={`/courses/${element.course}`}>
                  <Button color="yellow.500" variant={'unstyled'}>
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylist(element.course)}
                  colorScheme="yellow"
                  width={'32'}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangeImage
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
}

export default Profile;

function ChangeImage({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImgpreview] = useState('');
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.on = () => {
      setImgpreview(reader.result);
    };
    setImage(file);
  };

  const closeHandler = () => {
    onClose();
    setImage('');
    setImgpreview('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}
                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImageHandler}
                />

                {imagePrev && (
                  <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
                )}

                <Button width={'full'} colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancle
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
