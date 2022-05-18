import Link from 'next/link'
import '../styles/globals.css'
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function MyApp({ Component, pageProps }) {
  return(
  <>
  <div className="nav">
  <img src="/jplogo.jpg" alt="jobs24x7 logo" height = {61}/ >
    <Link href="/">
      <a>Jobs24X7</a>
    </Link>
  </div>
  <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
>
  <Component {...pageProps} /></motion.main>
  <footer className={styles.footer}>
        <a
          href="https://github.com/ironzoul"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ♥ by{' '}
          <span className={styles.logo}>
            <Image src="/GitHub.png" alt="Git" width={20} height={20} />
            
          </span>
          Ketan Pal
        </a><br />
        <a href = '/contact'>
          contact
        </a>
      </footer>
  </>
  ) 
}

export default MyApp
