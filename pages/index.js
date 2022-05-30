import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sroik</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sroik" />
        <meta name="og:description" content="Sroik's Personal Website" />
        <link rel="icon" href="/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.name}>
          SROIK
        </h1>
      </main>

      <Footer/>
    </div>
  )
}
