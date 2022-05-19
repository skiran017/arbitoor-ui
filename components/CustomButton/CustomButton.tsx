import React, { useEffect, useState } from 'react';
import { Button, Box, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  text: string;
  swapHandler?: () => void;
  btnType?: string;
  isLoading?: boolean;
  isSignedIn?: boolean;
}

function CustomButton({
  text,
  swapHandler,
  btnType,
  isLoading,
  isSignedIn,
  ...props
}: Props) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSignedIn && btnType === 'swap') {
    return (
      <Button
        position="relative"
        width="100%"
        bgColor="black"
        color="white"
        borderRadius="14px"
        _hover={{ bgColor: 'black' }}
        height="56px"
        marginTop="16px"
        {...props}
      >
        Swap
      </Button>
    );
  }
  return (
    <>
      <Box>
        <Button
          position="relative"
          width="100%"
          bgColor="black"
          color="white"
          borderRadius="14px"
          _hover={{ bgColor: 'black' }}
          height="56px"
          marginTop="16px"
          {...props}
        >
          {text}
        </Button>
      </Box>
    </>
  );
}

export default CustomButton;
