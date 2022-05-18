import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';

function ToggleToken() {
  return (
    <Box marginTop="48px">
      <Flex justifyContent="center">
        <Flex
          color="black"
          backgroundColor="rgb(235 239 241/1)"
          borderRadius="999px"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          width="32px"
          height="32px"
        >
          <Image
            src="/assets/icons/trade.svg"
            alt="toggle"
            width={5}
            height={9}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default ToggleToken;
