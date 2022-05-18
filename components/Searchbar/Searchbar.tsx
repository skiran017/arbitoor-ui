import React from 'react';
import Image from 'next/image';
import { Flex, Box, Input } from '@chakra-ui/react';

function Searchbar() {
  return (
    <Flex justifyContent="center">
      <Box w="100%" maxW="450px">
        <Box>
          <Box
            w="100%"
            borderRadius="14px"
            bgColor="white"
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
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Searchbar;
