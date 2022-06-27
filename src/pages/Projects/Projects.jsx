import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import "./Project.css";
import MinorProjectCarousel from "./MinorProjectCarousel";
import ProjectCard from "./ProjectCard";
import ProjectsNav from "./ProjectsNav";
import Entry from "../Entry";

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
          All Projects
        </Typography>
        <ProjectsNav/>
        <div className="wrapper">
          <ProjectCard/>
        </div>
      </Container>
      <Container style={{ marginBottom: "5%", width: "90%" }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="600"
          style={{ fontFamily: "var(--quicksand)", margin: "3% 0px" }}
        >
          Some minor projects
        </Typography>
        <MinorProjectCarousel />
      </Container>
    </>
  );
};

export default Projects;
