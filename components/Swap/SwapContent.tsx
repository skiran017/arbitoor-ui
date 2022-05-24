import React, { useState, useEffect } from 'react';
import { Flex, Box, Input } from '@chakra-ui/react';
import TokenList from '../TokenList/TokenList';
import ToggleToken from '../ToggleToken/ToggleToken';
import SwapSide from './SwapSide';
import BestPrice from '../BestPrice/BestPrice';
import CustomButton from '../CustomButton/CustomButton';
import { tokenList } from '../../utils/tokenList';
import useConnection from '../../hooks/useConnection';

import { Token } from '../../types';

function SwapContent() {
  const [payToken, setPayToken] = useState<Token>(tokenList[0]);
  const [receiveToken, setReceiveToken] = useState<Token>(tokenList[1]);

  const { handleSignIn, isLoading, isSignedIn, load } = useConnection();

  useEffect(() => {
    load();
  }, []);

  function selectPayToken(token: Token) {
    setPayToken(token);
  }
  function selectReceiveToken(token: Token) {
    setReceiveToken(token);
  }
  function tokenSwitchHandler() {
    setPayToken(receiveToken);
    setReceiveToken(payToken);
  }
  function handleSwap() {
    alert('swap successful');
  }
  return (
    <>
      <Flex
        direction="column"
        // bgColor="whitesmoke"
        bgColor="#26262C"
        borderRadius="14px"
        padding="32px 22px"
        color="whitesmoke"
      >
        <SwapSide swapSide="pay" balanceAmount={10} />
        <Box
          paddingX="14px"
          backgroundColor="#101010"
          // backgroundColor="white"
          height="64px"
          borderRadius="14px"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            paddingY="14px"
          >
            <TokenList selectToken={selectPayToken} token={payToken} />

            <Input
              fontWeight="600"
              fontSize="1.125rem"
              variant="unstyled"
              textAlign="right"
              placeholder="0.00"
              type="number"
              min="1"
            />
          </Flex>
        </Box>

        <ToggleToken handleTokenSwitch={tokenSwitchHandler} />
        <Box>
          <SwapSide swapSide="receive" balanceAmount={1} />

          <TokenList selectToken={selectReceiveToken} token={receiveToken} />

          <BestPrice />
        </Box>
      </Flex>

      <div
        style={{
          marginBottom: '18px',
        }}
      />
      <CustomButton
        btnType="swap"
        text="Connect Wallet"
        isSignedIn={isSignedIn}
        isLoading={isLoading}
        swapHandler={isSignedIn ? handleSwap : handleSignIn}
      />
    </>
  );
}

export default SwapContent;
