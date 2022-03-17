import Head from 'next/head'
import Header from '../../components/Header'

function Blog({ postData }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header isBackHeader={true} />
      <h1>{postData.title}</h1>
      <main dangerouslySetInnerHTML={{ __html: postData.contentHTML }}>
      </main>
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