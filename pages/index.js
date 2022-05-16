import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


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
        <h1 className={styles.title}>
          Welcome to <a href="/">Jobs24X7</a>
        </h1>

        <p className={styles.description}>
          Post or Search for jobs
        </p>

        <div className={styles.grid}>
          <a href="/recruiter" className={styles.card}>
            <h2>Post Jobs &rarr;</h2>
            <p>Post for jobs without any extra cost and find out talents you are looking for!</p>
          </a>

          <a href="/recruited" className={styles.card}>
            <h2>Search Jobs &rarr;</h2>
            <p>Find jobs that suits you and your work styles 🎓 Show them what you are made up of!</p>
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
        </a>
      </footer>
    </div>
    </>
  )
}
