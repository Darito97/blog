function BlogLabels({ labels }) {

  const Label = (value) => (
    <li key={key}>#{value}</li>
  )

  return (labels ?
    <ul>
      {labels.map((label, index) => <Label value={label} key={label + index} />)}
    </ul>
    : null
  )
}

export default BlogLabels