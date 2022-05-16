import Link from 'next/link'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
  <>
  <div className="nav">
  <img src="/jplogo.jpg" alt="jobs24x7 logo" height = {61}/ >
    <Link href="/">
      <a>Jobs24X7</a>
    </Link>
  </div>
  <Component {...pageProps} />
  </>
  ) 
}

export default MyApp
