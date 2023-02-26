import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PartsView from '../src/components/PartsView';
import Selector from '../src/components/Selector';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PC Parts Selector</title>
        <meta name="description" content="Choose the best part for your PC!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Selector />
        <PartsView />
      </main>
    </>
  )
}
