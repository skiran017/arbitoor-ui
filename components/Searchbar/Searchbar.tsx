import React from 'react';
import Image from 'next/image';
import { Flex, Box, Input, Text, chakra } from '@chakra-ui/react';
import SearchDropdown from './SearchDropdown';

function Searchbar() {
  const [show, setShow] = React.useState<boolean>(false);
  const toggleDropDown = () => {
    setShow(!show);
  };
  return (
    <Flex justifyContent="center" position="relative">
      <Box w="100%" maxW="450px" position="relative">
        <Box>
          <Box
            onClick={toggleDropDown}
            onBlur={toggleDropDown}
            w="100%"
            borderRadius="14px"
            // bgColor="white"
            bgColor="#26262C"
            padding="6px 20px"
            marginTop="8px"
            boxShadow={
              '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)'
            }
          >
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  src="/assets/icons/search.svg"
                  width={18}
                  height={18}
                  alt="search"
                />
              </Flex>
              <Input
                placeholder="You can try 10 NEAR to USDC"
                border="none"
                _focus={{ boxShadow: 'none' }}
                color="whitesmoke"
              />
            </Flex>
          </Box>
          {show ? <SearchDropdown /> : null}
        </Box>
      </Box>
    </Flex>
  );
}

export default Searchbar;
