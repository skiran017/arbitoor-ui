import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Cykura: The Key Liquidity Aggregator and Swap Infrastructure for Near
      </a>
    </footer>
  );
}

export default Footer;
