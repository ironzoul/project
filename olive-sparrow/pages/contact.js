import styles from '../styles/Home.module.css'
import { Button
 } from '@mui/material'
 import { styled } from '@mui/material/styles';
 import { purple } from '@mui/material/colors';


  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));



export default function contact(){
    return(
        <>
            <main className={styles.main}>
            <section id="contact">
    <div class="container contact-row">
        <div class="contact-left-col">
            <h1>Sign Up to join our<br/>learning community</h1>
            <form class={styles.contactform}>
            <input type="text" placeholder="Enter Name"/>
            <input type="email" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <div class="btn-box">
            <ColorButton variant="contained">SignUp</ColorButton><br/><br/>
            <ColorButton variant="contained">Start free trial</ColorButton>
            </div>
            </form>
            <div class="line">
                <span class="line-1"></span><br/>
                <span class="line-2"></span><br/>
                <span class="line-3"></span>
            </div>
        </div>
        <div class="contact-right-col">
            <img src="images/contact.png"/>
        </div>
    </div>
</section>   
            </main>
        </>
    )
}