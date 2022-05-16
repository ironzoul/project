import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sanityClient,urlFor } from '../lib/sanity'
import Link from 'next/link'

const jobsQuery = `*[_type == "job"]{
  _id,
  name,
  image
}`;



export default function Recruiter({jobs}) {
  
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
          <a href="/">Jobs24X7</a>
        </h1>

            <h2> Post jobs</h2>

        <form className={styles.postcard}>
          <input  type="hidden" name="_id" />
                          
          <label >
            <span ><h3>Organization</h3></span><br />
            <input name="name"  placeholder="Enter Organization Name"/>
            </label>
            <br />
                                                                                                                          
          <label >
            <span ><h3>Job Title</h3></span><br />
            <input name="email" type="email"  placeholder="Enter Job Title"/>
          </label>

          <label >
            <span ><h3>Description</h3></span><br />
            <textarea  name="comment"  rows="8" placeholder="Enter some details about this job post."></textarea>
          </label><br />
                                                                                  
          {/* errors will return when field validation fails  */}
        
          
          <input type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
        </form>


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
        <form />
      </footer>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const jobs = await sanityClient.fetch(jobsQuery);
  return {props: {jobs}};
}

