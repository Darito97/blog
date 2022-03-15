import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Blogcard from '../components/Blogcard'
export default function Home() {
  let testLabels = ['Labels', 'de', 'prueba']
  return (
    <div className={styles.container}>
      <Head>
        <title>Darito blogs</title>
        <meta name="description" content="¡Hola! Si quieres ver mis blogs entra aqui. Me llamo David Alonso Ruiz y soy desarrollador web..." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header isBackHeader={false} />
      <main className={styles.Blogs}>
        <Blogcard title={'Hi'} imageLink={'/images/blogImages/example-image.jpeg'} labels={testLabels} path={'/'} />
      </main>
      <Footer />
    </div>
  )
}
