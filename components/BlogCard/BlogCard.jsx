import Image from 'next/image'
import ArrowButton from '../ArrowButton/ArrowButton'
import BlogLabels from '../BlogLabels/BlogLabels'

function BlogCard({ imagePath, title, labels }) {
  return (
    <article>
      <Image src={imagePath} alt={'image' + title} />
      <h4>{title}</h4>
      <div>
        <BlogLabels labels={labels} />
        <ArrowButton />
      </div>
    </article>
  )
}

export default BlogCard