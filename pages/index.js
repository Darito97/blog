import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Blogcard from '../components/Blogcard'
export default function Home({ allPostData }) {
  let testLabels = ['Labels', 'de', 'prueba']
  console.log(allPostData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Darito blogs</title>
        <meta name="description" content="¡Hola! Si quieres ver mis blogs entra aqui. Me llamo David Alonso Ruiz y soy desarrollador web..." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header isBackHeader={false} />
      <main className={styles.Blogs}>
        {
          allPostData ?
            allPostData.map(postData => {
              let labels = postData.labels.split(' ')
              return <Blogcard key={postData.id} title={postData.title} imageLink={postData.imageLink} labels={labels} path={`/posts/${postData.id}`} />
            })
            : null}
      </main>
      <Footer />
    </div>
  )
}
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostData = getSortedPostsData()
  return {
    props: {
      allPostData
    }
  }
}
