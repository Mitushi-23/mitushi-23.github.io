import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const [value, setValue] = React.useState(0);
  return (
    <>
     <Box className='footer' sx={{ width: '500px' , margin:'auto',marginTop:'4%',marginBottom:'2%'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="foot"
        style={{borderRadius:'6px',backgroundColor:'transparent',border:'1px solid var(--footer-bg)',boxShadow:'var(--footer-bg) 2px 2px 2px 2px',color:'white'}}
      >
        <BottomNavigationAction className='insta' href='https://www.instagram.com/mitushi_agrawal_/' style={{color:'white'}}  icon={<InstagramIcon />}></BottomNavigationAction>
        <BottomNavigationAction className='twit' href='https://twitter.com/mitushi_agrawal' style={{color:'white'}}  icon={<TwitterIcon />} />
        <BottomNavigationAction className='linke' href='https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/' style={{color:'white'}}  icon={<LinkedInIcon />} />
        <BottomNavigationAction className='git' href='https://github.com/Mitushi-23/' style={{color:'white'}}  icon={<GitHubIcon />} />
      </BottomNavigation>
    </Box>
    <hr />
          <p style={{textAlign:'center'}}>Copyright &copy; 2022 Mitushi Agrawal</p>
    
    </>
  )
}

export default Footer