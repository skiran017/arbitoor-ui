import React from 'react';
import { Flex, Box, Text, chakra } from '@chakra-ui/react';
import { topTradedPairs } from '../../utils/top5Pairs';

interface Pair {
  id: string;
  ticker: string;
  url: string;
  description: string;
}

function SearchDropdown() {
  return (
    <Box
      position="absolute"
      inset="56px auto auto 0px"
      maxW="450px"
      transform="translate3d(541.935px, 78.2258px, 0px)"
      w="100%"
      zIndex="20"
    >
      <Flex
        bgColor="white"
        borderRadius="14px"
        boxShadow={
          '0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)'
        }
        maxH="90vh"
        height="100%"
        width="100%"
        direction="column"
      >
        <Box maxH="50vh" color="black" overflowY="scroll">
          <Text lineHeight="1.5" paddingX="20px" paddingTop="16px">
            Top Traded Pairs
          </Text>
          {topTradedPairs.map((pair) => {
            return (
              <chakra.a href={pair.url} key={pair.id}>
                <Box _hover={{ bgColor: '#eee' }} padding="14px 48px">
                  <Flex>
                    <Flex>
                      <Flex direction="column">
                        <Text>{pair.ticker}</Text>
                        <Text fontSize="12px">{pair.description}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Text></Text>
              </chakra.a>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
}

export default SearchDropdown;
