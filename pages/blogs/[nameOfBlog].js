import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'

function Blog(props) {
  const router = useRouter()
  const { nameOfBlog } = router.query
  return (
    <div>
      <Head>
        <title>{nameOfBlog}</title>
      </Head>
      Hi
    </div>
  )
}


export default Blog