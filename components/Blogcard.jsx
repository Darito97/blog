import Image from 'next/image'
import Link from 'next/link'
import BlogCardStyles from '../styles/BlogCard.module.css'
import BlogLabels from './BlogLabels'

function Blogcard({ title, imageLink, labels, path }) {
  return (
    <article className={BlogCardStyles.blogCard}>
      <div className={BlogCardStyles.boxBlogImage}>
        <Image priority className={BlogCardStyles.blogImage}
          layout='fill' src={imageLink} alt={title} />
      </div>
      <h4 className={BlogCardStyles.blogCardTitle}>{title}</h4>
      <div className={BlogCardStyles.linkSecction}>
        <BlogLabels labels={labels} />
        <Link href={path}>
          <a className={BlogCardStyles.arrowLink}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 6.25L5 15L13.75 23.75M5 15L25 15L5 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Blogcard