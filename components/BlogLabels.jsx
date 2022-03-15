function BlogLabels({ labels }) {

  return (labels ?
    <ul>
      {
        labels.map((label, index) => <li key={label + index}>#{label}</li>)
      }
    </ul>
    : null
  )
}

export default BlogLabels