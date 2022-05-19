import React, { useEffect, useState } from 'react';
import * as nearAPI from 'near-api-js';
import { useGlobalStore } from '../utils/globalStore';


function useConnection() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [wallet, setWallet] = useState<any>(null);
  // const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

  const [isLoading, isSignedIn, wallet, setIsLoading, setIsSignedIn, setWallet] = useGlobalStore((state) => [state.connectionState.isLoading,
  state.connectionState.isSignedIn,
  state.connectionState.wallet,
  state.actions.connection.setIsLoading,
  state.actions.connection.setIsSignedIn,
  state.actions.connection.setWallet,
  ]);

  useEffect(() => {
    // console.log(wallet)
    if (wallet && wallet.isSignedIn()) {

      setIsSignedIn(true)
    }
  }, [])



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
        headers: {},
      };

      setIsLoading(true);

      // connect to NEAR
      const near = await connect(config);

      // create wallet connection
      const data = new WalletConnection(near, null);
      setWallet(data);
      setIsLoading(false);
    }
  };

  const handleSignIn = () => {
    wallet.requestSignIn();
    setIsSignedIn(true);
  };

  const handleSignOut = () => {

    wallet.signOut();
    setWallet(null);
    setIsSignedIn(false)
  };

  return {
    load,
    isLoading,
    handleSignIn,
    handleSignOut,
    isSignedIn

  }
}

export default useConnection