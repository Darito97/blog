import Head from "next/head"
import Image from "next/image"
import Header from "./Header"
import Footer from "./Footer"
import BlogLabels from "./BlogLabels"
import BlogsStyles from '../styles/Blogs.module.css'
function Blog({ title, imageLink, labels, postContent }) {
  return (
    <div className={BlogsStyles.blog}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header isBackHeader={true} />
      <div className={BlogsStyles.boxImage}>
        <Image className={BlogsStyles.image} priority layout='fill' src={imageLink} alt={title} />
      </div>
      <main className={BlogsStyles.main}>
        <h1 className={BlogsStyles.blogTitle}>{title}</h1>
        <BlogLabels labels={labels} />
        <section className={BlogsStyles.blogContent} dangerouslySetInnerHTML={{ __html: postContent }}>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog