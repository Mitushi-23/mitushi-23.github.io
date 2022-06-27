import { Container, Typography, Grid, Button } from "@mui/material";
import React from "react";
import { MovingComponent } from "react-moving-text";
import image from "../assets/profile_1.png";
import FileDownloadTwoToneIcon from "@mui/icons-material/FileDownloadTwoTone";
// import {withRouter} from 'react-router-dom'

const Home = () => {
 
  return (
    <>
      <Container  style={{ marginTop: "5%" }}>
        <Grid className="home" container marginLeft="-10%">
          <Grid className="heading" item md={6} sm={6} lg={8} marginTop="20%">
            <Typography variant="h3" style={{ color: "var(--main-col)" }}>
              Hi..
            </Typography>
            <Typography variant="h2" fontSize="70px" fontWeight="800">
              I am{" "}
              <span
                style={{
                  fontFamily: "Play, sans-serif",
                  color: "var(--main-col)",
                }}
              >
                {" "}
                Mitushi Agrawal{" "}
              </span>
            </Typography>
            <br />
            <MovingComponent
              type="slideInFromLeft"
              duration="10s"
              delay="2s"
              direction="normal"
              timing="ease"
              iteration="Infinite"
              fillMode="none"
              style={{ fontSize: "22px" }}
            >
              Full Stack Developer &nbsp; Competitive Programmer &nbsp; Linux
              User
            </MovingComponent>
            <Button
              variant="outlined"
              size="large"
              style={{ marginTop: "5%" }}
              href="https://drive.google.com/file/d/1waBVHodRsR67oneQTejyIFmU2xAEv71R/view?usp=sharing"
              target="_blank"
              download
              startIcon={<FileDownloadTwoToneIcon />}
            >
              Download Resume
            </Button>
            <br />
            <br />
          </Grid>
          <Grid className="image" item md={6} sm={6} lg={4}>
            <img className="profile" src={image} alt="" height="auto"/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
