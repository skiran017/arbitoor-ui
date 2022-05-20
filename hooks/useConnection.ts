import React, { useEffect, useState } from 'react';
import * as nearAPI from 'near-api-js';
import { useRouter } from 'next/router'
import { useGlobalStore } from '../utils/globalStore';


function useConnection() {
  const router = useRouter()

  const [storageData, setStorageData] = useState<any>(null);

  const [isLoading, isSignedIn, wallet, setIsLoading, setIsSignedIn, setWallet] = useGlobalStore((state) => [state.connectionState.isLoading,
  state.connectionState.isSignedIn,
  state.connectionState.wallet,
  state.actions.connection.setIsLoading,
  state.actions.connection.setIsSignedIn,
  state.actions.connection.setWallet,
  ]);

  useEffect(() => {

    if (wallet?.isSignedIn()) {
      if (typeof window !== 'undefined') {
        setStorageData(JSON.parse(window.localStorage.getItem("null_wallet_auth_key")!))
      }
    }
  }, [wallet])

  useEffect(() => {
    if (storageData?.allKeys[0]) {
      setIsSignedIn(true)
    }
  }, [storageData])





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
        contractName: 'skiran017.testnet'
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

  function handleSignOut() {
    wallet?.signOut();
    localStorage.clear();
    setStorageData(null)
    setIsSignedIn(false)
    router.push('/')
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