import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  const isAuthanticated = true;
  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('LogOut');
    onClose();
  };
  const LinkButton = ({ url = '/', title = 'Home', onClose }) => {
    return (
      <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>{title}</Button>
      </Link>
    );
  };
  const { isOpen, isClose, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'10'}
        height={'10'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        zIndex={'overlay'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} isClose={isClose}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>MD AFJAL</DrawerHeader>

          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton url="/" title="Home" onClose={onClose} />
              <LinkButton
                url="/courses"
                title="Brows All Cources"
                onClose={onClose}
              />
              <LinkButton
                url="/request"
                title="Request A Course"
                onClose={onClose}
              />
              <LinkButton url="/contact" title="Contact Us" onClose={onClose} />
              <LinkButton url="/about" title="About" onClose={onClose} />

              <HStack
                width={'80%'}
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
              >
                {isAuthanticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'} onClick={onClose}>
                          <Button variant="ghost" colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          LogOut
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard" onClick={onClose}>
                          <Button colorScheme="purple" variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} onClick={onClose}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to={'register'} onClick={onClose}>
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
