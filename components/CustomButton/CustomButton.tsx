import React from 'react';
import { Flex, Text, chakra, Box, Button } from '@chakra-ui/react';

function CustomButton() {
  return (
    <Button
      position="relative"
      width="100%"
      marginTop="16px"
      bgColor="black"
      color="white"
      borderRadius="14px"
      height="56px"
      _hover={{ bgColor: 'black' }}
    >
      Connect Wallet
    </Button>
  );
}

export default CustomButton;
