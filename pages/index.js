import Head from "next/head";
import { styled } from '@mui/material/styles';
import styles from '../styles/Home.module.css'
import TextField from "@mui/material/TextField";
import { Input } from '@mui/material';
import { useRouter } from 'next/router'
import Link from 'next/link';
import {grey} from '@mui/material/colors';
import { Button
} from '@mui/material'


  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    '&:hover': {
      backgroundColor: grey[600],
    },
  }));



const ColorInput = styled(TextField)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: grey[200],
    },
  }));

const LoginPage = () => {
    const router = useRouter()

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <main className={styles.main}>
          <div className={styles.Logcard}>
      <h2>Sign in</h2>
      <form >
          <div>
          <ColorInput label="Username" required="true"/>
        </div>
        <br />
        <div>
            <ColorInput label="Password" required="true"/>
        </div><br /><Link href="/Landing">
        <ColorButton type="submit" href="/">Sign in</ColorButton></Link>
      </form>
      </div>
      </main>
    </>
  );
};

export default LoginPage;