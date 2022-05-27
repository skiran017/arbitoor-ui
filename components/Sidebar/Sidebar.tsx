import React from 'react';
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { links } from '../../utils/navLinks';

function Sidebar({ isOpen, toggleSidebar }: any) {
  const { onOpen, onClose } = useDisclosure();
  return (
    <Drawer
      placement="right"
      onClose={toggleSidebar}
      isOpen={isOpen}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent bg="#26262C" color="whitesmoke">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Arbitoor</DrawerHeader>
        <DrawerBody>
          {links.map((link) => (
            <Flex
              key={link.id}
              alignItems="center"
              cursor="pointer"
              color="whitesmoke"
            >
              <Link href={`${link.url}`}>
                <Button
                  width="100%"
                  bg="transparent"
                  borderBottom="1px solid"
                  // borderRadius="none"
                  onClick={toggleSidebar}
                  marginBottom="16px"
                >
                  <Text>{link.text}</Text>
                </Button>
              </Link>
            </Flex>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
