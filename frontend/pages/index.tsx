import { useReducer } from 'react';
import Head from 'next/head'
import { gql } from "@apollo/client";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PartsView from '../src/components/PartsView';
import Selector from '../src/components/SelectorView';
import client from "../src/middleware/apollo-client";
import { Motherboard } from '@/type';
import { initialState, reducer } from '@/src/middleware/useReducer';

const inter = Inter({ subsets: ['latin'] })

interface pageProps {
  motherboards: Motherboard[];
}

export default function Home({ motherboards }: pageProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedMotherboardId, selectedCaseId, selectedCpuId, selectedRamId, selectedGraphicId, selectedPowerSupplierId, selectedStorageId } = state;
  const selectedParts = { selectedMotherboardId, selectedCaseId, selectedCpuId, selectedRamId, selectedGraphicId, selectedPowerSupplierId, selectedStorageId };
  return (
    <>
      <Head>
        <title>PC Parts Selector</title>
        <meta name="description" content="Choose the best part for your PC!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Selector motherboards={motherboards} selectedMotherboardId={selectedMotherboardId} dispatch={dispatch} />
        <PartsView
          selectedParts={selectedParts}
        />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getStartData {
        getMotherboardsBy {
          _id
          model
          brand {
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      motherboards: data.getMotherboardsBy,
    },
  };
}
