import React from 'react';
import { Flex, Text, chakra, Box, Input } from '@chakra-ui/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { EstimateSwapView } from '@comethq/comet-sdk';

type RouteItem = {
  output: string;
  actions: EstimateSwapView[];
};
interface Routes {
  routes: Array<RouteItem> | undefined;
  path: string[] | undefined;
}

function BestPrice({ routes, path }: Routes) {
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
                'linear-gradient(#101010, #101010), radial-gradient(circle at top left, #ff0078,#ffb720)',
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
                <Flex direction="row">
                  {path &&
                    path.map((ticker: any, idx: number, arr: any) => {
                      return (
                        <>
                          <Flex marginLeft="4px" alignItems="center">
                            <Text fontSize="11px" fontWeight="semibold">
                              <chakra.span>{ticker}</chakra.span>
                            </Text>
                            {arr.length - 1 > idx ? (
                              <Flex alignItems="center" marginLeft="4px">
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  color="whitesmoke"
                                  height="10px"
                                  width="12px"
                                />
                              </Flex>
                            ) : null}
                          </Flex>
                        </>
                      );
                    })}
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
                  <chakra.span>Jumbo.finance</chakra.span>
                </Flex>
                <Flex direction="row">
                  {path &&
                    path.map((ticker: any, idx: number, arr: any) => {
                      return (
                        <>
                          <Flex marginLeft="4px" alignItems="center">
                            <Text fontSize="11px" fontWeight="semibold">
                              <chakra.span>{ticker}</chakra.span>
                            </Text>
                            {arr.length - 1 > idx ? (
                              <Flex alignItems="center" marginLeft="4px">
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  color="whitesmoke"
                                  height="10px"
                                  width="12px"
                                />
                              </Flex>
                            ) : null}
                          </Flex>
                        </>
                      );
                    })}
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
