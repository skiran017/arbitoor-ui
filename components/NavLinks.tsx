import React from 'react';
import Link from 'next/link';
import { Flex, Text, chakra } from '@chakra-ui/react';
import { links } from '../utils/navLinks';
import Image from 'next/image';

interface Props {
  styleClass?: string;
}

export default function NavLinks({ styleClass }: Props) {
  return (
    <Flex
      flex="1 1 0%"
      justifyContent="space-between"
      className={`page-links ${styleClass ? styleClass : ''}`}
    >
      {links.map((link) => (
        <Flex key={link.id} alignItems="center" cursor="pointer">
          <Image src={link.icon} alt={link.text} width={20} height={20} />
          <Link href={`${link.url}`}>
            <Text fontSize="md" ml="6px">
              {link.text}
            </Text>
          </Link>
        </Flex>
      ))}
    </Flex>
  );
}
