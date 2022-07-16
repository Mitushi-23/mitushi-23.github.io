import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "@mui/material";
import { AllProjects } from "./ProjectInfo";
import { NavLink } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";

const ProjectCard = () => {
  return (
    <>
      <Masonry columns={3} spacing={2} style={{margin:'auto'}}>
        {AllProjects.map(
          (Project) =>
          Project.category === "major" && (
            <Card className="card" style={{ margin: "20px",
            height:`${Project.height}`,
            width:'320px'
               }}>
                <img
                  src={`${require("../../assets/projects/" +
                    Project.image +
                    ".png")}?w=162&auto=format`}
                  srcSet={`${require("../../assets/projects/" +
                    Project.image +
                    ".png")}?w=162&auto=format&dpr=2 2x`}
                  alt={Project.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                  }}
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
      </Masonry>
    </>
  );
};

export default ProjectCard;
