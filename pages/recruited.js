import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sanityClient,urlFor } from '../lib/sanity'
import Link from 'next/link'
import { motion } from 'framer-motion';


const jobsQuery = `*[_type == "job"]{
  _id,
  name,
  image,
  bio
}`;



export default function Recruited({jobs}) {
  
  return (
    <>
    
      <Head>
        <title>Job Portal</title>
        <meta name="Online job site" content="created by Ketan Pal" />
        <link rel="icon" href="/jplogo.jpg" />
      </Head>
        <main className={styles.main}>
        
            
        <div className={styles.grid}>
        
          {jobs?.length > 0 && jobs.map((job) =>(
            
        
          <Link href="/">
            <a  className={styles.jobcard}>
            <motion.div  className="card" whileHover={{
                scale: 1.3,
                transition: {
                  duration: .2
                }
              }}><span><h2 align="center">&nbsp;&nbsp;{job.image}</h2>
              
            </span></motion.div>
              
          </a> 
         
          </Link>
        
        ))}
        
        </div>

        </main>

        
    
    </>
  )
}

export async function getStaticProps() {
  const jobs = await sanityClient.fetch(jobsQuery);
  return {props: {jobs}};
}


