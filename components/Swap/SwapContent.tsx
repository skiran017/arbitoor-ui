import React from 'react';
import { Flex, Text, chakra, Box } from '@chakra-ui/react';

function SwapContent() {
  return (
    <Flex
      direction="column"
      bgColor="white"
      borderRadius="14px"
      padding="32px 22px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-end"
        fontSize="0.75rem"
        lineHeight="1rem"
        paddingBottom="14px"
      >
        <Text fontWeight="600" fontSize="0.875rem" lineHeight="1.25rem">
          <chakra.span>You pay</chakra.span>
        </Text>
        <Box>
          <Flex
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            color="black"
            fontSize="0.75rem"
            lineHeight="1rem"
          >
            <chakra.span>Balance : 10</chakra.span>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SwapContent;
