import Head from 'next/head'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Darito blogs</title>
        <meta name="description" content="¡Hola! Si quieres ver mis blogs entra aqui. Me llamo David Alonso Ruiz y soy desarrollador web..." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header isBackHeader={true} />
      <Footer />
    </div>
  )
}
