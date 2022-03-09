import Link from "next/link"
import Image from "next/image"

function ArrowButton({ direction, url }) {
  return (
    <Link href={url}>
      <a>
        <Image priority src='/icons/arrowIcon.svg' layout="fill" alt="Icon arrow darito svg" />
      </a>
    </Link>
  )
}

export default ArrowButton