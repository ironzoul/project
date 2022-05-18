import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sanityClient,urlFor } from '../lib/sanity'
import Link from 'next/link'
import { Button
} from '@mui/material'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { grey, purple} from '@mui/material/colors';


  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const ColorInput = styled(TextField)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

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

            

        <form className={styles.postcard}>
          
        <h1> Post jobs</h1>
          <label >
            <span ><h3>Organization</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }}>
            <ColorInput label="Organization"
          multiline
          color="primary"
          maxRows={4}/>
        </FormControl>
            </label>
            <br />
                                                                                                                          
          <label >
            <span ><h3>Job Title</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }} background="white">
          
            <ColorInput label="Job Title"
          multiline
          color="primary"
          maxRows={4}/>
        </FormControl>
            
          </label>

          <label >
            <span ><h3>Description</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }}>
              <ColorInput label="Description"
          multiline
          color="primary"
          maxRows={4}/>
          
        </FormControl>
          </label><br />
                                                                                  
          {/* errors will return when field validation fails  */}
        
          
          <ColorButton>Submit</ColorButton>
        </form>


        </main>

        
    </div>
    </>
  )
}

export async function getStaticProps() {
  const jobs = await sanityClient.fetch(jobsQuery);
  return {props: {jobs}};
}

