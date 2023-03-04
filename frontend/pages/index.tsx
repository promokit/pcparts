import Head from 'next/head'
import { gql } from "@apollo/client";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PartsView from '../src/components/PartsView';
import Selector from '../src/components/SelectorView';
import client from "../src/middleware/apollo-client";
import { Motherboard } from '@/type/Motherboard';

const inter = Inter({ subsets: ['latin'] })

interface pageProps {
  motherboards: Motherboard[]
}

export default function Home({ motherboards } : pageProps) {
  return (
    <>
      <Head>
        <title>PC Parts Selector</title>
        <meta name="description" content="Choose the best part for your PC!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Selector motherboards={motherboards}/>
        <PartsView />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getMotherboards {
        motherboard {
          ram_slots
          model
          brand
        }
      }
    `,
  });

  return {
    props: {
      motherboards: data.motherboard,
    },
 };
}
