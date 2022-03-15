import Image from 'next/image'
import BlogCardStyles from '../styles/BlogCard.module.css'
import BlogLabels from './BlogLabels'

function Blogcard({ title, imageLink, labels }) {
  return (
    <article className={BlogCardStyles.blogCard}>
      <div className={BlogCardStyles.boxBlogImage}>
        <Image className={BlogCardStyles.blogImage}
          layout='fill' src={imageLink} alt={title} />
      </div>
      <h4 className={BlogCardStyles.blogCardTitle}>{title}</h4>
      <BlogLabels labels={labels} />
    </article>
  )
}

export default Blogcard