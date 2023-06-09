import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Layout } from '../components/layouts/layout'



import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryoji's works</title>
        <meta name="description" content="This is Ryoji`s portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <Layout />
    </>
  )
}
