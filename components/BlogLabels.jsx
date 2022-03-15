import BlogLabelsStyles from '../styles/BlogLabels.module.css'
function BlogLabels({ labels }) {

  return (labels ?
    <ul className={BlogLabelsStyles.listOfLabels}>
      {
        labels.map((label, index) => <li key={label + index}>#{label}</li>)
      }
    </ul>
    : null
  )
}

export default BlogLabels