import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  Text,
  Image,
  Flex,
  Box,
  chakra,
} from '@chakra-ui/react';

import { tokenList } from '../../utils/tokenList';

function TokenList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        _focus={{ boxShadow: 'none' }}
        onClick={onOpen}
        padding="8px"
        borderRadius="8px"
        width="33%"
        backgroundColor="transparent"
        _hover={{ backgroundColor: 'rgb(243 244 246/1)' }}
      >
        <Flex>
          <Flex alignItems="center">
            <Image
              alt="ticker symbol"
              src="/assets/tickerLogos/sol.webp"
              width={22}
              height={5}
              borderRadius="12px"
            />
            <Text marginLeft="6px"> SOL</Text>
            <Image
              src="/assets/icons/downArrow.svg"
              alt="arrow down"
              width={3}
              height={3}
              marginLeft="6px"
            />
          </Flex>
        </Flex>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay background="#fff" />
        <ModalContent
          maxHeight="90vh"
          height="100%"
          overflow="hidden"
          width="100%"
          position="fixed"
        >
          <ModalHeader>
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
                placeholder="Search by token or paste address"
                border="none"
                _focus={{ boxShadow: 'none' }}
                ref={initialRef}
              />
            </Flex>
          </ModalHeader>

          <ModalBody pb={6} borderTop="1px solid #eee">
            <Box
              position="fixed"
              inset="72px auto auto 10px"
              maxW="448px"
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
                <Box maxH="75vh" color="black" overflowY="scroll">
                  {tokenList.map((token) => {
                    return (
                      <chakra.a key={token.id}>
                        <Box _hover={{ bgColor: '#eee' }} padding="14px 48px">
                          <Flex>
                            <Flex>
                              <Flex direction="column">
                                <Text>{token.ticker}</Text>
                                <Text fontSize="12px">{token.description}</Text>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TokenList;
