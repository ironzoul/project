import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sanityClient,urlFor } from '../lib/sanity'
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';


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

            <h2> Post jobs</h2>

        <form className={styles.postcard}>
          <input  type="hidden" name="_id" />
                          
          <label >
            <span ><h3>Organization</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Organization</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value=" organization name "
            label="Required"
          />
        </FormControl>
            </label>
            <br />
                                                                                                                          
          <label >
            <span ><h3>Job Title</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Job Title</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value="Job Title"
            label="Required"
          />
        </FormControl>
            
          </label>

          <label >
            <span ><h3>Description</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          
        />
        </FormControl>
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

