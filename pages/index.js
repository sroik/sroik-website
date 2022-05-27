import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sroik</title>
        <meta name="description" content="Sroik's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.name}>
          SROIK
        </h1>
      </main>
    </div>
  )
}
