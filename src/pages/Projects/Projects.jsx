import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link, Tooltip } from "@mui/material";
import { ProjectInfo } from "./ProjectInfo";
import { NavLink } from "react-router-dom";
import MinorProjectCarousel from "./MinorProjectCarousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tooltip title="Python" arrow placement="top">
            <FiberManualRecordIcon style={{ color: "var(--colour-blue)" }} />
          </Tooltip>
          <Tooltip title="Vanilla JS" arrow placement="top">
            <FiberManualRecordIcon style={{ color: "var(--title-colo)" }} />
          </Tooltip>
          <Tooltip title="MERN Stack" arrow placement="top">
            <FiberManualRecordIcon style={{ color: "deeppink" }} />
          </Tooltip>
          <Tooltip title="React JS" arrow placement="top">
            <FiberManualRecordIcon style={{ color: "darkviolet" }} />
          </Tooltip>
          <Tooltip title="CANVAS" arrow placement="top">
            <FiberManualRecordIcon style={{ color: "coral" }} />
          </Tooltip>
        </div>
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
              <div
                className="design"
                style={{ backgroundColor: `${Project.tag}` }}
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
          ))}
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
