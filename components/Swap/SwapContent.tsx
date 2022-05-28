import React, { useState, useEffect } from 'react';
import { Flex, Box, Input } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { providers } from 'near-api-js';
import { faSliders, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import TokenList from '../TokenList/TokenList';
import ToggleToken from '../ToggleToken/ToggleToken';
import SwapSide from './SwapSide';
import BestPrice from '../BestPrice/BestPrice';
import CustomButton from '../CustomButton/CustomButton';
import { tokenList } from '../../utils/tokenList';
import { Token } from '../../types';
import { useWalletSelector } from '../../hooks/WalletSelectorContext';
import {
  Comet,
  EstimateSwapView,
  getExpectedOutputFromActions,
} from '@comethq/comet-sdk';
import BigNumber from 'bignumber.js';
import LoadingBestPrice from '../BestPrice/LoadingBestPrice';

export interface SwapRoute {
  output: string;
  actions: EstimateSwapView[];
}

/**
 * Returns a string representation of swap path
 *
 * Example: USDC -> USDT, USDC -> WNEAR, USDT
 * @param actions
 * @returns
 */
function getRoutePath(actions: EstimateSwapView[]) {
  const routes: string[] = [];

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const route = action
      .nodeRoute!.map((token) => {
        const saved = tokenList.find((savedToken) => {
          return savedToken.id == token;
        });

        return saved ? saved.ticker : token.slice(0, 10);
      })
      .join(' -> ');

    if (i === 0 || routes[routes.length - 1] !== route) {
      routes.push(route);
    }
  }
  return routes.join(', ').split(' -> ');
}

function SwapContent() {
  const [payToken, setPayToken] = useState<Token>(tokenList[0]);
  const [receiveToken, setReceiveToken] = useState<Token>(tokenList[1]);
  const [inputAmount, setInputAmount] = useState<string>();
  const [refPath, setRefPath] = useState<string[]>();
  const [jumboPath, setJumboPath] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>();

  // TODO Remove placeholder routes on the UI. Display generated path once 'routes' is set
  const [routes, setRoutes] = useState<SwapRoute[]>();
  const { selector } = useWalletSelector();

  useEffect(() => {
    async function findRoutes() {
      if (inputAmount && payToken && receiveToken) {
        const inputAmountAdjusted = new BigNumber(10)
          .pow(payToken.decimals)
          .multipliedBy(new BigNumber(inputAmount));
        setLoading(true);
        try {
          const provider = new providers.JsonRpcProvider({
            url: 'https://near-mainnet--rpc--archive.datahub.figment.io/apikey/e7051fbb390e25bd106777e8194529c7',
          });
          const comet = new Comet({
            provider,
            user: 'test.near',
            routeCacheDuration: 1000,
          });

          const actions = await comet.computeRoutes({
            inputToken: payToken.id,
            outputToken: receiveToken.id,
            inputAmount: inputAmountAdjusted.toString(),
          });

          // Use this to display swap paths on the UI
          const refPath = getRoutePath(actions.ref);
          setRefPath(refPath);
          const jumboPath = getRoutePath(actions.jumbo);
          setJumboPath(jumboPath);

          const [refOutput, jumboOutput] = await Promise.all([
            getExpectedOutputFromActions(actions.ref, receiveToken.id, 5),
            getExpectedOutputFromActions(actions.jumbo, receiveToken.id, 5),
          ]);
          if (refOutput.gte(jumboOutput)) {
            setRoutes([
              {
                output: refOutput.toString(),
                actions: actions.ref,
              },
              {
                output: jumboOutput.toString(),
                actions: actions.jumbo,
              },
            ]);
          }
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
    }

    findRoutes();
  }, [payToken, receiveToken, inputAmount]);

  const handleSignIn = () => {
    selector.show();
  };

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
    console.log('tokens', payToken, receiveToken);
  }
  return (
    <>
      <Flex
        direction="column"
        // bgColor="whitesmoke"
        bgColor="#26262C"
        borderRadius="14px"
        padding="22px 22px 32px"
        color="whitesmoke"
      >
        <Flex marginBottom="16px" justifyContent="flex-end" alignItems="center">
          <Box paddingRight="18px">
            <FontAwesomeIcon
              icon={faRotateRight}
              color="whitesmoke"
              height="18px"
              width="18px"
              cursor="pointer"
            />
          </Box>
          <Box>
            <FontAwesomeIcon
              icon={faSliders}
              color="whitesmoke"
              height="18px"
              width="18px"
              cursor="pointer"
            />
          </Box>
        </Flex>
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
              value={inputAmount}
              onChange={(event) => {
                setInputAmount(event.target.value);
              }}
            />
          </Flex>
        </Box>

        <ToggleToken handleTokenSwitch={tokenSwitchHandler} />
        <Box>
          <SwapSide swapSide="receive" balanceAmount={1} />

          <TokenList selectToken={selectReceiveToken} token={receiveToken} />
          {loading || !refPath?.length ? (
            <LoadingBestPrice
              text={
                inputAmount
                  ? 'Please wait while we fetch the best price...'
                  : ''
              }
              display={!inputAmount ? 'none' : 'flex'}
            />
          ) : (
            <BestPrice routes={routes} refPath={refPath} jumboPath={jumboPath} />
          )}
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
        isSignedIn={selector.isSignedIn()}
        swapHandler={selector.isSignedIn() ? handleSwap : handleSignIn}
        disabled={selector.isSignedIn() && !path?.length}
      />
    </>
  );
}

export default SwapContent;
