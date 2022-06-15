import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "@mui/material";
import { AllProjects } from "./ProjectInfo";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
    {AllProjects.map((Project) => (
        Project.category==='major'&&
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
          ))}
    </>
  )
}

export default ProjectCard