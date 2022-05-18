import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';



export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Job Portal</title>
        <meta name="Online job site" content="created by Ketan Pal" />
        <link rel="icon" href="/jplogo.jpg" />
      </Head>
      
      <main className={styles.main}>
      
      
        <img src="/jplogo.jpg" alt="jobs24x7 logo" width= {80} height = {80}/ >
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 2,
            }
          },
        }}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Jobs24X7</a>
        </h1>
        </motion.div>
        <p className={styles.description}>
          Post or Search for jobs
        </p>

        <div className={styles.grid}>
        
          <a href="/recruiter" className={styles.card}>
          <motion.div  className="card" whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                }
              }}>
            <h2>Post Jobs &rarr;</h2>
            <p>Post for jobs without any extra cost and find out talents you are looking for!</p></motion.div>
          </a>
          
          <a href="/recruited" className={styles.card}>
          <motion.div  className="card" whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                }
              }}>
            <h2>Search Jobs &rarr;</h2>
            <p>Find jobs that suits you and your work styles 🎓 Show them what you are made up of!</p></motion.div>
          </a>

        </div>
      </main>

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
    </div>
    </>
  )
}
