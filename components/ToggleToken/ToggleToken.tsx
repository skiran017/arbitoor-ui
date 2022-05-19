import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';

interface Props {
  handleTokenSwitch: () => void;
}

function ToggleToken({ handleTokenSwitch }: Props) {
  return (
    <Box marginTop="48px">
      <Flex justifyContent="center" onClick={handleTokenSwitch}>
        <Flex
          color="black"
          backgroundColor="rgb(235 239 241/1)"
          borderRadius="999px"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          width="32px"
          height="32px"
        >
          <Image
            src="/assets/icons/trade.svg"
            alt="toggle"
            width={5}
            height={9}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default ToggleToken;
