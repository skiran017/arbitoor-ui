import React from 'react';
import Image from 'next/image';
import { Flex, Box, Input, Text, chakra } from '@chakra-ui/react';
import { topTradedPairs } from '../../utils/top5Pairs';

interface Pair {
  id: string;
  ticker: string;
  url: string;
  description: string;
}

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
          <Box
            position="absolute"
            inset="0px auto auto 0px"
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
              // background="transparent"
            >
              <Flex
                alignItems="center"
                padding="6px 20px"
                borderBottom="1px solid #eee"
              >
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
              <Box maxH="50vh" color="black" overflowY="scroll">
                <Text lineHeight="1.5" paddingX="20px" paddingTop="16px">
                  Top Traded Pairs
                </Text>
                {topTradedPairs.map((pair: Pair) => {
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
        </Box>
      </Box>
    </Flex>
  );
}

export default Searchbar;
