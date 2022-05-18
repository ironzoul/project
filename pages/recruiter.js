import * as React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { sanityClient,urlFor } from '../lib/sanity'
import Select from '@mui/material/Select';
import { Button} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { grey, purple} from '@mui/material/colors';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  Height: auto;
  width: 100%;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin-top: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  align: center;
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;


function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};

  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const ColorInput = styled(Select)(({ theme }) => ({
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




export default function Recruiter() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const [value, setValue] = React.useState(10);
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
            <div>
      <CustomSelect value={value} onChange={setValue}>
        <StyledOption value={'Airtel'}>Airtel</StyledOption>
        <StyledOption value={'Amazon'}>Amazon</StyledOption>
        <StyledOption value={'Flipkart'}>Flipkart</StyledOption>
        <StyledOption value={'Reliance Industries'}>Reliance Industries</StyledOption>
        <StyledOption value={'JP Morgan'}>JP morgan</StyledOption>
      </CustomSelect>

     
    </div>
        </FormControl>
            </label>
            <br />
                                                                                                                          
          <label >
            <span ><h3>Job Title</h3></span><br />
            <FormControl fullWidth sx={{ m: 1 }} background="white">
          
            
          <FormControl>
          <div>
      <CustomSelect value={value} onChange={setValue}>
        <StyledOption value={'Software Engineer'}>Software Engineer</StyledOption>
        <StyledOption value={'Web Developer'}>Web Developer</StyledOption>
        <StyledOption value={'Database Admin'}>Database Admin</StyledOption>
        <StyledOption value={'Technical Consultant'}>Technical Consultant</StyledOption>
      </CustomSelect>

     
    </div>
      </FormControl>
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

