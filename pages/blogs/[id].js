import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import BlogLabels from '../../components/BlogLabels'
import Footer from '../../components/Footer'
import BlogsStyles from '../../styles/Blogs.module.css'

function Blog({ postData }) {
  const labels = postData.labels.split(' ')
  return (
    <div className={BlogsStyles.blog}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header isBackHeader={true} />
      <div className={BlogsStyles.boxImage}>
        <Image className={BlogsStyles.image} priority layout='fill' src={postData.imageLink} alt={postData.title} />
      </div>
      <main className={BlogsStyles.main}>
        <h1 className={BlogsStyles.blogTitle}>{postData.title}</h1>
        <BlogLabels labels={labels} />
        <section className={BlogsStyles.blogContent} dangerouslySetInnerHTML={{ __html: postData.contentHTML }}>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default Blog