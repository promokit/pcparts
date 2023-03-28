import Head from 'next/head'
import { gql } from "@apollo/client";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PartsView from '../src/components/PartsView';
import Selector from '../src/components/SelectorView';
import client from "../src/middleware/apollo-client";
import { Motherboard, CPU } from '@/type';

const inter = Inter({ subsets: ['latin'] })

interface pageProps {
  motherboards: Motherboard[]
  cpus: CPU[]
}

export default function Home({ motherboards, cpus } : pageProps) {
  return (
    <>
      <Head>
        <title>PC Parts Selector</title>
        <meta name="description" content="Choose the best part for your PC!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Selector motherboards={motherboards} cpus={cpus} />
        <PartsView />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getStartData {
        getMotherboardsBy(limit: 20) {
          _id
          brand {
            name
          }
          model
          ram_slots
        }
        getCpuBy(limit: 20) {
          _id
          brand {
            name
          }
          model
        }
      }
    `,
  });

  return {
    props: {
      motherboards: data.getMotherboardsBy,
      cpus: data.getCpuBy,
    },
 };
}
