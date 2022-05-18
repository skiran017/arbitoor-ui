import React from 'react';
import { Flex, Text, chakra, Box, Input, Button } from '@chakra-ui/react';
import TokenList from '../TokenList/TokenList';
import ToggleToken from '../ToggleToken/ToggleToken';
import SwapSide from './SwapSide';
import BestPrice from '../BestPrice/BestPrice';

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
      <Box
        paddingX="14px"
        backgroundColor="rgb(235 239 241/1)"
        height="64px"
        borderRadius="14px"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          paddingY="14px"
        >
          <TokenList />

          <Input
            fontWeight="600"
            fontSize="1.125rem"
            variant="unstyled"
            textAlign="right"
            placeholder="0.00"
            type="number"
            min="1"
          />
        </Flex>
      </Box>
      <ToggleToken />
      <SwapSide swapSide="receive" balanceAmount={1} />
      <TokenList />
      <BestPrice />
    </Flex>
  );
}

export default SwapContent;
