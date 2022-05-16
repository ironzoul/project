import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sanityClient,urlFor } from '../lib/sanity'
import Link from 'next/link'

const jobsQuery = `*[_type == "job"]{
  _id,
  name,
  image,
  bio
}`;



export default function Recruited({jobs}) {
  
  return (
    <>
    <div>
      <Head>
        <title>Job Portal</title>
        <meta name="Online job site" content="created by Ketan Pal" />
        <link rel="icon" href="/jplogo.jpg" />
      </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Available jobs
        </h1>
            
        <div className={styles.grid}>
          {jobs?.length > 0 && jobs.map((job) =>(
        
          <Link href="/">
            <a href="/" className={styles.jobcard}>
            <span><h2>{job.image}</h2>
            </span>
                    
          </a> 
          </Link>
        
        ))}
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
            <Image src="/GitHub.png" alt="Git" width={20} height={20}  />
            
          </span>
          Ketan Pal
        </a>
      </footer>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const jobs = await sanityClient.fetch(jobsQuery);
  return {props: {jobs}};
}


