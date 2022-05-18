import React from 'react';
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
            padding="14px"
            marginTop="8px"
          >
            <Input
              placeholder="You can try 10 NEAR to USDC"
              border="none"
              _focus={{ boxShadow: 'none' }}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Searchbar;
