import { Grid, ListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import img from "../assets/profile.png";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
  return (
    <div>
      <Typography textAlign="center" variant="h2" textTransform="uppercase" fontFamily='var(--quicksand)' letterSpacing="1.3px" fontWeight="bold">
        About <span style={{color:'var(--main-col)'}}>Me</span> 
      </Typography>
      <div style={{margin:'0px 10%'}}>
        <Grid container marginY="8%">
          <Grid item md="6">
            <img src={img} alt="" height="500" style={{ borderRadius: "50%" }} />
          </Grid>
          <Grid item md="6" marginY="2%">
            <Box border="0.5px solid white" boxShadow="2.5px 2.5px" padding="30px">
              <Typography variant="h5" paddingBottom="10px" color="var(--main-col)"  fontFamily="var(--nunito)" fontWeight='800'>Hello</Typography>
              <hr color="var(--main)"/>
            <Typography variant="h6" padding="10px 0px" fontFamily="var(--nunito)">
              Myself &nbsp;<span  style={{color:"var(--main-col)" ,textTransform:'uppercase'}}> Mitushi Agrawal</span>&nbsp; an undergrad persuing BTech in Computer Science from IIIT Bhopal. Core web development team member of CODAME Club, IIIT Bhopal. A tech enthusiast seeking to work in a competitive environment to enhance my skills. In the field of tech I am an aspiring Full Stack Developer and a Competitive Programmer.
            </Typography>
              <Typography variant="h6" padding="10px 0px" fontFamily="var(--nunito)">Other than technical skills, I am good at dancing and cooking.</Typography>
              <hr color="var(--main)"/>
              <ListItem>
              <HomeIcon  style={{color:"var(--main-colo)"}}/>
              &nbsp;
              &nbsp;
              <Typography fontFamily="var(--poppins)" color="var(--main-colo)">Agra, Uttar Pradesh</Typography>
              </ListItem>
              <ListItem>
              <EmailIcon style={{color:"var(--main-colo)"}}/>
              &nbsp;
              &nbsp;
              <Typography fontFamily="var(--poppins)" color="var(--main-colo)">mitushi2agrawal@gmail.com</Typography>
              </ListItem>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
