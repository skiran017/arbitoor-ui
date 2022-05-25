import React from 'react';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import NavLinks from '../NavLinks';
import CustomButton from '../CustomButton/CustomButton';
import Link from 'next/link';
import { useWalletSelector } from '../../hooks/WalletSelectorContext';

function Navbar() {
  const { selector } = useWalletSelector();

  const handleSignIn = () => {
    selector.show();
  };

  function handleSignOut() {
    selector.signOut().catch((err) => {
      console.log('Failed to sign out');
      console.error(err);
    });
  }
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="1rem 4rem"
      fontWeight="600"
    >
      <Flex flex="1 1 0%">
        <Flex flex="0.25">
          <Link href="/">
            <Flex cursor="pointer">
              <Image
                src="/assets/logo.png"
                alt="brand logo"
                height={40}
                width={50}
              />
              <Text
                fontSize="xl"
                padding="4px"
                marginLeft="4px"
                color="whitesmoke"
              >
                Arbitoor
              </Text>
            </Flex>
          </Link>
        </Flex>

        <NavLinks />
      </Flex>
      <Flex flex="1 1 0%" justifyContent="flex-end">
        <CustomButton
          color="white"
          borderRadius="14px"
          width="156px"
          height="48px"
          opacity="0.75"
          onClick={selector.isSignedIn() ? handleSignOut : handleSignIn}
          text={selector.isSignedIn() ? 'Signout' : 'Connect Wallet'}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
