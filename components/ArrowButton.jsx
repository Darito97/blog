import Link from "next/link"
function ArrowButton({ direction, url }) {
  return (
    <Link to={url}>
      <a>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.75 6.25L5 15L13.75 23.75M5 15L25 15L5 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </Link>
  )
}

export default ArrowButton