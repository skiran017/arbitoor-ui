import React, { useContext, useEffect, useState } from 'react';
import NearWalletSelector, { AccountInfo } from '@near-wallet-selector/core';
import { setupNearWallet } from '@near-wallet-selector/near-wallet';
import { setupSender } from '@near-wallet-selector/sender';
import { setupMathWallet } from '@near-wallet-selector/math-wallet';
import { setupLedger } from '@near-wallet-selector/ledger';

interface WalletSelectorContextValue {
  selector: NearWalletSelector;
  accounts: Array<AccountInfo>;
  accountId: string | null;
  setAccountId: (accountId: string) => void;
}

const WalletSelectorContext =
  React.createContext<WalletSelectorContextValue | null>(null);

export const WalletSelectorContextProvider = ({ children }: any) => {
  const [selector, setSelector] = useState<NearWalletSelector | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<Array<AccountInfo>>([]);

  const syncAccountState = (
    currentAccountId: string | null,
    newAccounts: Array<AccountInfo>
  ) => {
    if (!newAccounts.length) {
      localStorage.removeItem('accountId');
      setAccountId(null);
      setAccounts([]);

      return;
    }

    const validAccountId =
      currentAccountId &&
      newAccounts.some((x) => x.accountId === currentAccountId);
    const newAccountId = validAccountId
      ? currentAccountId
      : newAccounts[0].accountId;

    localStorage.setItem('accountId', newAccountId);
    setAccountId(newAccountId);
    setAccounts(newAccounts);
  };

  useEffect(() => {
    NearWalletSelector.init({
      network: 'mainnet',
      // network: {
      //   networkId: 'mainnet',
      //   nodeUrl: 'https://near-mainnet--rpc--archive.datahub.figment.io/apikey/1ce7ba3bbf636a5385aa1bc2c75e5d8c',
      //   helperUrl: '',
      //   explorerUrl: '',
      //   restApiUrl: '',
      // },
      contractId: 'wrap.near',
      wallets: [
        setupNearWallet({
          iconUrl: '/assets/walletSelector/near-wallet-icon.png',
        }),
        setupSender({
          iconUrl: '/assets/walletSelector/sender-icon.png',
        }),
        setupLedger({
          iconUrl: '/assets/walletSelector/ledger-icon.png',
        }),
        setupMathWallet({
          iconUrl: '/assets/walletSelector/math-wallet-icon.png',
        }),
      ],
    })
      .then(instance => {
        return instance.getAccounts().then(async (newAccounts) => {
          syncAccountState(localStorage.getItem('accountId'), newAccounts);

          // eslint-disable-next-line
          // @ts-ignore-next-line
          // window.selector = instance;

          setSelector(instance);
        });
      })
      .catch((err: any) => {
        console.error(err);
        alert('Failed to initialise wallet selector');
      });
  }, []);

  useEffect(() => {
    if (!selector) {
      return;
    }

    const subscription = selector.on('accountsChanged', (e: any) => {
      syncAccountState(accountId, e.accounts);
    });

    return () => subscription.remove();
  }, [selector, accountId]);

  if (!selector) {
    return null;
  }

  return (
    <WalletSelectorContext.Provider
      value={{
        selector,
        accounts,
        accountId,
        setAccountId,
      }}
    >
      {children}
    </WalletSelectorContext.Provider>
  );
};

export function useWalletSelector() {
  const context = useContext(WalletSelectorContext);

  if (!context) {
    throw new Error(
      'useWalletSelector must be used within a WalletSelectorContextProvider'
    );
  }

  return context;
}
