import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "@mui/material";
import { AllProjects } from "./ProjectInfo";
import { NavLink } from "react-router-dom";
import ProjectsNav from "./ProjectsNav";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectsCategory = (props) => {
  return (
    <>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="600"
          style={{ fontFamily: "var(--quicksand)", margin: "3% 0px" }}
        >
          {props.category} Projects
        </Typography>
        <NavLink
          to="/project"
          style={{
            textDecoration: "none",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <ArrowBackIcon /> &nbsp; GO BACK
        </NavLink>
        <ProjectsNav />
        <div className="wrapper">
          {AllProjects.map(
            (Project) =>
              Project.tag === `${props.category}` && (
                <Card className="card" style={{ margin: "20px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={require("../../assets/projects/" +
                      Project.image +
                      ".png")}
                    style={{ borderRadius: "0px" }}
                  />
                  <div
                    className="design"
                    style={{ backgroundColor: `${Project.tag_colour}` }}
                  ></div>
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
                      {
                        // console.log(Project.site_link)
                        Project.site_link === "" ? (
                          <Link style={{ color: "white" }} href="">
                            <LinkIcon fontSize="medium" className="icon" />
                          </Link>
                        ) : (
                          <Link
                            style={{ color: "white" }}
                            target="_blank"
                            href={Project.site_link}
                          >
                            <LinkIcon fontSize="medium" className="icon" />
                          </Link>
                        )
                      }
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
              )
          )}
        </div>
      </Container>
    </>
  );
};

export default ProjectsCategory;
