import React from 'react';
import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';
import NavLinks from '../NavLinks';
import CustomButton from '../CustomButton/CustomButton';
import Link from 'next/link';
import { useWalletSelector } from '../../hooks/WalletSelectorContext';
import AccountDetails from '../AccountDetails/AccountDetails';

function Navbar() {
  const { selector } = useWalletSelector();
  const handleSignIn = () => {
    selector.show();
  };

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
        {selector.isSignedIn() ? (
          <AccountDetails />
        ) : (
          <CustomButton
            color="white"
            borderRadius="14px"
            width="156px"
            height="48px"
            opacity="0.75"
            onClick={handleSignIn}
            text="Connect Wallet"
          />
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
