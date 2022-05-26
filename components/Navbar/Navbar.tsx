import React from 'react';
import Image from 'next/image';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import NavLinks from '../NavLinks';
import CustomButton from '../CustomButton/CustomButton';
import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWalletSelector } from '../../hooks/WalletSelectorContext';
import AccountDetails from '../AccountDetails/AccountDetails';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const { selector } = useWalletSelector();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSignIn = () => {
    selector.show();
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p={['1rem 2rem', '1rem 2rem', '1rem 4rem', '1rem 4rem']}
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
      <Flex
        flex="1 1 0%"
        justifyContent="flex-end"
        display={['none', 'none', 'flex', 'flex']}
      >
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
      <Box display={['flex', 'flex', 'none', 'none']}>
        <Button variant="contained" onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            color="whitesmoke"
            height="22px"
            width="22px"
          />
        </Button>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </Box>
    </Flex>
  );
}

export default Navbar;
