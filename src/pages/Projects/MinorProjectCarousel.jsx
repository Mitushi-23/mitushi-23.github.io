import React from "react";
import { Carousel } from "react-bootstrap";
import { AllProjects } from "./ProjectInfo";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "./Project.css";

function MinorProjectCarousel() {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto" }}>
      <Carousel>
        {AllProjects.map(
          (Project) =>
            Project.category === "minor" && (
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div class="card_1">
                    <div class="card-image">
                      <img
                        className="testimonialImages d-block "
                        src={require("../../assets/projects/" +
                          Project.image +
                          ".png")}
                          alt=""
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div className="design_1" style={{backgroundColor:`${Project.tag_colour}`}}></div>
                    <Carousel.Caption>
                      <ul class="social-icons">
                        <li>
                          <Link href={Project.github_link} target="_blank">
                            <GitHubIcon />
                          </Link>
                        </li>
                        <li>
                          {
                            Project.site_link === "" ? (
                              <Link href="">
                                <LinkIcon />
                              </Link>
                            ) : (
                              <Link target="_blank" href={Project.site_link}>
                                <LinkIcon />
                              </Link>
                            )
                          }
                        </li>
                      </ul>
                    </Carousel.Caption>
                  </div>
                  <div class="details">
                    <h3>{Project.title}</h3>
                  </div>
                </div>
                <br />
              </Carousel.Item>
            )
        )}
      </Carousel>
    </Box>
  );
}

export default MinorProjectCarousel;
