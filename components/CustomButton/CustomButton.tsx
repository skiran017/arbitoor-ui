import React, { useEffect, useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
import * as nearAPI from 'near-api-js';
import { Account } from '../../types';

interface Props {
  text: string;
  props?: any;
  swapHandler?: () => void;
}

function CustomButton({ text, props, swapHandler }: Props) {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [wallet, setWallet] = useState<any>();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    if (typeof window !== 'undefined') {
      const { connect, keyStores, WalletConnection } = nearAPI;
      const keyStore = new keyStores.BrowserLocalStorageKeyStore();
      const config = {
        networkId: 'testnet',
        keyStore,
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
        headers: '',
      };

      // connect to NEAR
      const near = await connect(config);

      // create wallet connection
      const wallet = new WalletConnection(near, null);
      setWallet(wallet);
    }
  };

  const handleSignIn = () => {
    wallet.requestSignIn();
  };

  const signOut = () => {
    wallet.signOut();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (wallet?.isSignedIn()) {
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
        onClick={swapHandler}
      >
        {text}
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
          onClick={handleSignIn}
        >
          Connect Wallet
        </Button>
      </Box>
    </>
  );
}

export default CustomButton;
