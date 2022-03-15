import HeaderStyles from '../styles/Header.module.css'
import ArrowButton from "./ArrowButton"
function Header({ isBackHeader }) {

  const Logo = () => (
    <>
      <div className={HeaderStyles.logoBox}>
        <svg className={HeaderStyles.logo} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.9029 6.1669C23.6699 10.0303 19.8932 12.3176 19.8058 12.2934C19.7282 12.2691 15.2621 9.5292 9.8835 6.19923C4.50485 2.87735 0.0776699 0.153572 0.0485437 0.153572C0.0194175 0.153572 0 9.117 0 20.0768C0 36.2255 0.0194175 40 0.126214 40C0.194175 40 1.17476 39.4261 2.30097 38.723C3.42718 38.0279 6.08738 36.3791 8.20388 35.0697C10.3301 33.7604 13.534 31.7721 15.3301 30.6648C17.1262 29.5494 18.9223 28.434 19.3204 28.1916C19.7184 27.941 20.1165 27.7632 20.1942 27.7794C20.2718 27.8036 24.7379 30.5435 30.1165 33.8735C35.4951 37.1954 39.9223 39.9192 39.9515 39.9192C39.9806 39.9192 40 30.9396 40 19.9555C40 8.97151 39.9709 -0.00807953 39.932 3.8147e-06C39.8835 3.8147e-06 35.3786 2.78036 29.9029 6.1669ZM36.1942 26.9145L36.1651 33.8735L24.4951 26.9469C18.068 23.1319 12.8155 19.9879 12.8155 19.9555C12.8155 19.9232 18.068 16.7792 24.4951 12.9642L36.1651 6.03759L36.1942 12.9966C36.2039 16.8276 36.2039 23.0835 36.1942 26.9145ZM10.3981 10.095C14 12.2287 16.9515 14.0069 16.9709 14.0473C16.9806 14.0796 14.8738 15.4132 12.2913 17.0135C9.69903 18.6058 7.58252 19.9313 7.58252 19.9555C7.58252 19.9798 9.76699 21.3376 12.4272 22.9865C15.0971 24.6272 17.2718 26.0012 17.2621 26.0335C17.233 26.082 4.75728 33.5017 4.04854 33.8897L3.78641 34.0352V20.1253C3.78641 12.4793 3.80583 6.2154 3.82524 6.2154C3.84466 6.2154 6.80583 7.96121 10.3981 10.095Z" fill="black" />
        </svg>
      </div>
      <h1 className={HeaderStyles.titlePage}>Darito blogs</h1>
    </>
  )

  return (
    <header className={HeaderStyles.Header}>
      <section className={HeaderStyles.firstSeccion}>
        {
          isBackHeader ? (
            <ArrowButton url={"/"} />
          ) : (
            <Logo />
          )
        }
      </section>
      <section className={HeaderStyles.socialPages}>
        <a href='https://github.com/Darito97' rel='noopener noreferrer' target='_blank'>
          <svg className={HeaderStyles.socialPages_Icon} width="26" height="26" viewBox="0 0 26 26" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0015 1.11728e-06C5.81812 -0.00298259 0 5.97039 0 13.3431C0 19.1733 3.63959 24.1292 8.7083 25.9493C9.39091 26.1253 9.28634 25.627 9.28634 25.2869V22.9745C5.34466 23.4489 5.1849 20.7696 4.92057 20.322C4.3861 19.3851 3.12256 19.1464 3.50017 18.6989C4.39772 18.2245 5.3127 18.8182 6.37292 20.4264C7.13976 21.5931 8.63568 21.3961 9.39381 21.2022C9.55938 20.501 9.91375 19.8745 10.4017 19.3881C6.31773 18.6362 4.61557 16.0762 4.61557 13.0328C4.61557 11.5559 5.08904 10.1983 6.01855 9.10328C5.42599 7.29814 6.07374 5.75258 6.16088 5.52284C7.84851 5.36768 9.60295 6.76406 9.73947 6.87446C10.698 6.60891 11.7931 6.46867 13.0189 6.46867C14.2505 6.46867 15.3485 6.61487 16.3157 6.88341C16.644 6.62681 18.2706 5.42736 19.8391 5.57356C19.9234 5.80331 20.5566 7.31306 19.9989 9.09433C20.94 10.1923 21.4193 11.5619 21.4193 13.0418C21.4193 16.0911 19.7055 18.6541 15.6099 19.3941C15.9607 19.7484 16.2392 20.1711 16.4292 20.6373C16.6193 21.1034 16.7169 21.6039 16.7166 22.1092V25.4659C16.7398 25.7344 16.7166 26 17.1523 26C22.2965 24.2187 26 19.227 26 13.3461C26 5.97039 20.179 1.11728e-06 13.0015 1.11728e-06Z" fill="black" />
          </svg>
        </a>
        <a href='https://twitter.com/DaritoAlonso' rel='noopener noreferrer' target='_blank'>
          <svg className={HeaderStyles.socialPages_Icon} width="26" height="26" viewBox="0 0 26 26" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M24.96 0H1.04C0.46475 0 0 0.46475 0 1.04V24.96C0 25.5352 0.46475 26 1.04 26H24.96C25.5352 26 26 25.5352 26 24.96V1.04C26 0.46475 25.5352 0 24.96 0ZM19.9972 9.41525C20.007 9.568 20.007 9.72725 20.007 9.88325C20.007 14.6543 16.3735 20.15 9.73375 20.15C7.68625 20.15 5.78825 19.5553 4.18925 18.5315C4.48175 18.564 4.76125 18.577 5.06025 18.577C6.75025 18.577 8.30375 18.005 9.542 17.0365C7.956 17.004 6.6235 15.964 6.1685 14.534C6.72425 14.6152 7.22475 14.6152 7.79675 14.469C6.98011 14.3031 6.24609 13.8596 5.7194 13.2138C5.19271 12.568 4.90583 11.7598 4.9075 10.9265V10.881C5.38525 11.1507 5.9475 11.3165 6.53575 11.3392C6.04124 11.0097 5.63569 10.5632 5.35506 10.0393C5.07443 9.51551 4.9274 8.93052 4.927 8.33625C4.927 7.6635 5.1025 7.04925 5.41775 6.51625C6.32418 7.63209 7.45527 8.54471 8.73751 9.19479C10.0197 9.84486 11.4244 10.2178 12.8602 10.2895C12.35 7.83575 14.183 5.85 16.3865 5.85C17.4265 5.85 18.3625 6.2855 19.0222 6.9875C19.838 6.83475 20.618 6.52925 21.3135 6.11975C21.0437 6.955 20.4782 7.66025 19.7275 8.1055C20.4555 8.0275 21.1575 7.826 21.8075 7.54325C21.3167 8.26475 20.7025 8.905 19.9972 9.41525Z" fill="black" />
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/david-alonso-ruiz/' rel='noopener noreferrer' target='_blank'>
          <svg className={HeaderStyles.socialPages_Icon} width="26" height="26" viewBox="0 0 26 26" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M24.96 0H1.04C0.46475 0 0 0.46475 0 1.04V24.96C0 25.5352 0.46475 26 1.04 26H24.96C25.5352 26 26 25.5352 26 24.96V1.04C26 0.46475 25.5352 0 24.96 0ZM7.71225 22.1552H3.8545V9.74675H7.71225V22.1552ZM5.785 8.05025C5.34276 8.05025 4.91045 7.91911 4.54274 7.67342C4.17504 7.42772 3.88844 7.07851 3.71921 6.66993C3.54997 6.26135 3.50569 5.81177 3.59196 5.37803C3.67824 4.94429 3.8912 4.54587 4.20391 4.23316C4.51662 3.92045 4.91504 3.70749 5.34878 3.62121C5.78252 3.53494 6.2321 3.57922 6.64068 3.74846C7.04926 3.91769 7.39847 4.20429 7.64417 4.57199C7.88986 4.9397 8.021 5.37201 8.021 5.81425C8.01775 7.04925 7.01675 8.05025 5.785 8.05025ZM22.1552 22.1552H18.3007V16.12C18.3007 14.6802 18.2747 12.831 16.2955 12.831C14.2902 12.831 13.9815 14.3975 13.9815 16.016V22.1552H10.1302V9.74675H13.8287V11.4432H13.8807C14.3942 10.4683 15.652 9.438 17.5305 9.438C21.437 9.438 22.1552 12.0087 22.1552 15.3497V22.1552Z" fill="black" />
          </svg>
        </a>
      </section>
    </header>
  )
}

export default Header