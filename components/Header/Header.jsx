import ArrowButton from "../ArrowButton/ArrowButton"
import Link from "next/link"
import Image from "next/image"
function Header({ isBackHeader }) {

  const Logo = () => (
    <>
      <div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.9029 6.1669C23.6699 10.0303 19.8932 12.3176 19.8058 12.2934C19.7282 12.2691 15.2621 9.5292 9.8835 6.19923C4.50485 2.87735 0.0776699 0.153572 0.0485437 0.153572C0.0194175 0.153572 0 9.117 0 20.0768C0 36.2255 0.0194175 40 0.126214 40C0.194175 40 1.17476 39.4261 2.30097 38.723C3.42718 38.0279 6.08738 36.3791 8.20388 35.0697C10.3301 33.7604 13.534 31.7721 15.3301 30.6648C17.1262 29.5494 18.9223 28.434 19.3204 28.1916C19.7184 27.941 20.1165 27.7632 20.1942 27.7794C20.2718 27.8036 24.7379 30.5435 30.1165 33.8735C35.4951 37.1954 39.9223 39.9192 39.9515 39.9192C39.9806 39.9192 40 30.9396 40 19.9555C40 8.97151 39.9709 -0.00807953 39.932 3.8147e-06C39.8835 3.8147e-06 35.3786 2.78036 29.9029 6.1669ZM36.1942 26.9145L36.1651 33.8735L24.4951 26.9469C18.068 23.1319 12.8155 19.9879 12.8155 19.9555C12.8155 19.9232 18.068 16.7792 24.4951 12.9642L36.1651 6.03759L36.1942 12.9966C36.2039 16.8276 36.2039 23.0835 36.1942 26.9145ZM10.3981 10.095C14 12.2287 16.9515 14.0069 16.9709 14.0473C16.9806 14.0796 14.8738 15.4132 12.2913 17.0135C9.69903 18.6058 7.58252 19.9313 7.58252 19.9555C7.58252 19.9798 9.76699 21.3376 12.4272 22.9865C15.0971 24.6272 17.2718 26.0012 17.2621 26.0335C17.233 26.082 4.75728 33.5017 4.04854 33.8897L3.78641 34.0352V20.1253C3.78641 12.4793 3.80583 6.2154 3.82524 6.2154C3.84466 6.2154 6.80583 7.96121 10.3981 10.095Z" fill="black" />
        </svg>
      </div>
      <h1>Darito blogs</h1>
    </>
  )

  return (
    <header>
      <section>
        {
          isBackHeader ? (
            <ArrowButton url={'/'} />
          ) : (
            <Logo />
          )
        }
      </section>
      <section>
        <Link href="">
          <a>
            <Image priority width={26} height={26} src="/icons/githubIcon.svg" alt="Github Icon svg David Alonso Ruiz Darito" />
          </a>
        </Link>
        <Link href="">
          <a>
            <Image priority width={26} height={26} src="/icons/twitterIcon.svg" alt="Twitter Icon svg David Alonso Ruiz Darito" />
          </a>
        </Link>
        <Link href="">
          <a>
            <Image priority width={26} height={26} src="/icons/linkedinIcon.svg" alt="linkedin Icon svg David Alonso Ruiz Darito" />
          </a>
        </Link>
      </section>
    </header>
  )
}

export default Header