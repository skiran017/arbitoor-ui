import React from 'react';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import styles from './Navbar.module.css';
import NavLinks from '../NavLinks';

function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="1rem 2rem"
    >
      <Flex flex="1 1 0%">
        <Image src="/assets/logo.png" alt="brand logo" height={40} width={50} />
        <Text fontSize="xl" padding="4px" marginLeft="4px">
          Cykura
        </Text>
      </Flex>
      <NavLinks styleClass="nav-links" />
      <Flex flex="1 1 0%" justifyContent="flex-end">
        <Button
          bgColor="black"
          color="white"
          borderRadius="14px"
          _hover={{ bgColor: 'black' }}
        >
          Connect Wallet
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
