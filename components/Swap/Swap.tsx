import React from 'react';
import { Flex, Text, chakra } from '@chakra-ui/react';
import TitleContent from './TitleContent';

function Swap() {
  return (
    <Flex direction="column" justifyContent="space-between">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop="40px"
      >
        <TitleContent />
      </Flex>
    </Flex>
  );
}

export default Swap;
