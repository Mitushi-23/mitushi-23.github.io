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
import MinorProjectCarousel from "./MinorProjectCarousel";

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
            <Card className="card" style={{ margin: "20px" }}>
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
      <Container style={{ marginBottom: "5%" ,width:'90%'}}>
<Typography
          variant="h4"
          textAlign="center"
          fontWeight="600"
          style={{ fontFamily: "var(--quicksand)", margin: "3% 0px" }}
        >
          Some minor projects
        </Typography>
        <MinorProjectCarousel/>
      </Container>
    </>
  );
};

export default Projects;
