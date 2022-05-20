import { Flex, chakra } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Flex
      flex=" 1"
      padding="1rem 0"
      borderTop="1px solid #eaeaea"
      justifyContent="center"
      alignItems="center"
      fontSize="0.8rem"
      lineHeight=" 1rem"
      color="rgba(0, 0, 0, 0.35)"
      backgroundColor="rgb(235 239 241/1)"
    >
      <chakra.a href="/" target="_blank" rel="noopener noreferrer">
        Cykura: The Key Liquidity Aggregator and Swap Infrastructure for Near
      </chakra.a>
    </Flex>
  );
}

export default Footer;
