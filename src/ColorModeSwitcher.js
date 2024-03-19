import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);

  return (
    <IconButton
      size="md"
      fontSize="md"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      position={'fixed'}
      top={'4'}
      right={'4'}
      rounded={'full'}
      zIndex={'overlay'}
      {...props}
    />
  );
};
