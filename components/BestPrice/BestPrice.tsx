import React from 'react';
import { Flex, Text, chakra, Box, Input } from '@chakra-ui/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function BestPrice() {
  return (
    <Box maxHeight="163px" height="100%">
      <Box position="relative" height="163px" w="100%">
        <Box height="148px" w="100%">
          <Box
            position="absolute"
            left="0px"
            top="18px"
            height="unset"
            width="99%"
            lineHeight="1.25"
            borderRadius="8px"
            // backgroundImage="linear-gradient(96.8deg,#faa43a 4.71%,#71e5ed 87.84%)"
            border="solid 3px transparent"
            style={{
              backgroundImage:
                'linear-gradient(#101010, #101010), radial-gradient(circle at top left, #ffdd00,#20ff3a)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
            }}
          >
            <Flex
              fontSize="13px"
              padding="16px"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="8px"
            >
              <Flex direction="column">
                <Flex alignItems="center" fontWeight="semibold">
                  <chakra.span>Ref.finance</chakra.span>
                </Flex>
                <Flex marginLeft="4px" color="whitesmoke">
                  {/* <Flex marginLeft="4px" alignItems="center">
                    <Text fontSize="11px" fontWeight="semibold">
                      <chakra.span>USDT</chakra.span>
                    </Text>
                    <Flex alignItems="center" marginLeft="4px">
                      <Image
                        src="/assets/icons/arrowRight.svg"
                        alt="arrow right"
                        height={12}
                        width={12}
                      />
                    </Flex>
                  </Flex> */}
                  <Flex marginLeft="4px" alignItems="center">
                    <Text fontSize="11px" fontWeight="semibold">
                      <chakra.span>USDC</chakra.span>
                    </Text>
                    <Flex alignItems="center" marginLeft="4px">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color="whitesmoke"
                        height="10px"
                        width="12px"
                      />
                    </Flex>
                  </Flex>
                  <Flex marginLeft="4px" alignItems="center">
                    <Text fontSize="11px" fontWeight="semibold">
                      <chakra.span>wNEAR</chakra.span>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box fontWeight="semibold" textAlign="right">
                0.196850908
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            left="0px"
            top="92px"
            height="unset"
            width="99%"
            lineHeight="1.25"
            borderRadius="8px"
            // backgroundColor="#eee"
            backgroundColor="#101010"
            marginTop="8px"
          >
            <Flex
              fontSize="13px"
              padding="16px"
              justifyContent="space-between"
              alignItems="center"
              borderRadius="8px"
            >
              <Flex direction="column">
                <Flex alignItems="center" fontWeight="semibold">
                  <chakra.span>Jumbo</chakra.span>
                </Flex>
                <Flex marginLeft="4px">
                  <Flex marginLeft="4px" alignItems="center">
                    <Text fontSize="11px" fontWeight="semibold">
                      <chakra.span>USDT</chakra.span>
                    </Text>
                    <Flex alignItems="center" marginLeft="4px">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color="whitesmoke"
                        height="10px"
                        width="12px"
                      />
                    </Flex>
                  </Flex>
                  <Flex marginLeft="4px" alignItems="center">
                    <Text fontSize="11px" fontWeight="semibold">
                      <chakra.span>USDC</chakra.span>
                    </Text>
                    <Flex alignItems="center" marginLeft="4px">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color="whitesmoke"
                        height="10px"
                        width="12px"
                      />
                    </Flex>
                  </Flex>
                  <Flex marginLeft="4px" alignItems="center">
                    <Text fontSize="11px" fontWeight="semibold">
                      <chakra.span>wNEAR</chakra.span>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box fontWeight="semibold" textAlign="right">
                0.196850908
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BestPrice;
