import React from 'react';
import styles from './Layout.module.css';

interface AppProps {
  children: React.ReactNode;
}

function Layout({ children }: AppProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
