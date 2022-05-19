import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Searchbar from '../components/Searchbar/Searchbar';
import Swap from '../components/Swap/Swap';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Near Swap</title>
        <meta
          name="Near Swap"
          content="The best swap aggregator on Near. Built for smart traders."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searchbar />
      <Swap />
    </Layout>
  );
};

export default Home;
