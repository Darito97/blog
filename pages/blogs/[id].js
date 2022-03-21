import BlogComponent from '../../components/Blog'

function Blog({ postData }) {
  const { title, imageLink, contentHTML } = postData
  const labels = postData.labels.split(' ')
  return (
    <BlogComponent title={title} imageLink={imageLink} postContent={contentHTML} labels={labels} />
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