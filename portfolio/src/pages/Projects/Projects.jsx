import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "@mui/material";
import { ProjectInfo, MinorProject } from "./ProjectInfo";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="600"
          style={{ fontFamily: "var(--quicksand)", margin: "3% 0px" }}
        >
          My Projects
        </Typography>
        <div className="wrapper">
          {ProjectInfo.map((Project) => (
            <Card className="card" style={{ margin: "20px 0px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={require("../../assets/projects/" +
                  Project.image +
                  ".png")}
                style={{ borderRadius: "0px" }}
              />
              <div className="info">
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "var(--play)",
                    color: "var(--title-col-yellow)",
                    fontWeight: "800",
                  }}
                >
                  {Project.title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: "20px 0px",
                  }}
                >
                  <Link
                    href={Project.github_link}
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <GitHubIcon fontSize="medium" className="icon" />
                  </Link>
                  <Link
                    href={Project.site_link}
                    style={{ color: "white" }}
                    target="_blank"
                  >
                    <LinkIcon fontSize="medium" className="icon" />
                  </Link>
                </div>

                <NavLink
                  component="button"
                  className="button"
                  to={`/project/${Project.id}`}
                  variant="body2"
                >
                  Read More
                </NavLink>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      <Container style={{ marginBottom: "5%" }}>
        {/* <Typography variant='h4'textAlign="center" fontWeight="600" style={{fontFamily:'var(--quicksand)', margin:'3% 0px'}}>Some minor projects</Typography>
    <div className="card-wrapper">
      {MinorProject.map((Project)=>(
        <Card  className="card_1" style={{margin:'10px 0px',width:'200px', height:'200px'}}>
      <div className='card-image'>
      <CardMedia
        component="img"
        alt="green iguana"
        image={require("../../assets/projects/"+Project.image+".png")}
        style={{borderRadius:'0px'}}
        />
        </div>
      <div className='info'>
        <Typography className='details' variant='h6' style={{fontFamily:'var(--play)',color:'var(--title-col-yellow)', fontWeight:'800'}}>{Project.title}</Typography>
        <div style={{display:'flex', justifyContent:'space-evenly', margin:'20px 0px'}} className="social-icons">
        <Link href={Project.github_link} target="_blank" style={{color:'white'}}><GitHubIcon fontSize='small' className='icon'/></Link>
        <Link href={Project.site_link} style={{color:'white'}} target="_blank"><LinkIcon fontSize='small' className='icon'/></Link>
        </div>
      </div>
   
    </Card>
        ))}
    </div> */}
<Typography
          variant="h4"
          textAlign="center"
          fontWeight="600"
          style={{ fontFamily: "var(--quicksand)", margin: "3% 0px" }}
        >
          Some minor projects
        </Typography>
        <div class="card-wrapper">
          {MinorProject.map((Project) => (
            <div class="card_1">
              <div class="card-image">
                <img
                  src={require("../../assets/projects/" +
                    Project.image +
                    ".png")}
                  alt="profile one"
                  height="100%"
                  width="100%"
                />
              </div>

              <ul class="social-icons">
                <li>
                  <Link href={Project.github_link}>
                    {/* <i class="fab fa-facebook-f"></i> */}
                    <GitHubIcon/>
                  </Link>
                </li>
                <li>
                  <Link href={Project.site_link}>
                    {/* <i class="fab fa-instagram"></i> */}
                    <LinkIcon/>
                  </Link>
                </li>
              </ul>

              <div class="details">
                <h3>
                  {Project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Projects;
