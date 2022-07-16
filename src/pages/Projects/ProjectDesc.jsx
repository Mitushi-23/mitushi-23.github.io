import { Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";
import { AllProjects } from "./ProjectInfo";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";

const ProjectDesc = () => {
  const { id } = useParams();
  // console.log(id)
  const Project = AllProjects.find((p) => p.id === id);

  return (
    <>
      <div style={{marginTop:'5%'}}>
        <div style={{ marginLeft: "5%" }}>
          <NavLink
            to="/project"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <ArrowBackIcon />
          &nbsp;GO BACK
          </NavLink>
        </div>

        <Grid className="home ab" container style={{ justifyContent: "center" }} marginTop="5%">
          <Grid item md="4">
            <img
            className="project"
              src={require("../../assets/projects/" + Project.image + ".png")}
              alt=""
              height="300px"
              width="500px"
              style={{
                borderRadius: "15px",
                border: "5px solid var(--main-col)",
                padding: "2px",
              }}
            />
          </Grid>
          <Grid item md="5" sm="8" xs="8">
            <Typography
              variant="h3"
              color="var(--main-col)"
              fontFamily="var(--play)"
            >
              {Project.title}
            </Typography>
            <Typography marginTop="20px" variant="h6">
              {Project.desc}
            </Typography>
            <Typography marginTop="10px" variant="h6">
              {Project.desc1}
            </Typography>
            <Typography variant="h6" marginTop="10px">
              This project is made using{" "}
              <span style={{ color: "var(--main-col)" }}>
                {Project.madeUsing}
              </span>
            </Typography>
            
            <div style={{ marginTop: "10%" }}>
            <Link
                  href={Project.github_link}
                  style={{ color: "var(--main-col)", margin: "20px" }}
                >
                  <GitHubIcon fontSize="large" className="icon_1" />
                </Link>
              {(Project.site_link === "") ? (
                <Link
                  href=""
                  style={{ color: "var(--main-col)", margin: "20px" }}
                >
                  <LinkIcon fontSize="large" className="icon_1" />
                </Link>
              ) : (
                <Link
                  href={Project.site_link}
                  style={{ color: "var(--main-col)", margin: "20px" }}
                  target="_blank"
                >
                  <LinkIcon fontSize="large" className="icon_1" />
                </Link>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProjectDesc;
