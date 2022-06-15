import React from "react";
import { Carousel } from "react-bootstrap";
import { AllProjects } from "./ProjectInfo";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { MinorProject } from "./ProjectInfo";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "./Project.css";

function MinorProjectCarousel() {
  return (
    <div>
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
                        height="100%"
                        width="100%"
                        //   alt={review.author}
                      />
                    </div>
                    <Carousel.Caption>
                      <ul class="social-icons">
                        <li>
                          <Link href={Project.github_link} target="_blank">
                            <GitHubIcon />
                          </Link>
                        </li>
                        <li>
                          {
                            // console.log(Project.site_link)
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
              </Carousel.Item>
            )
        )}
      </Carousel>
    </div>
  );
}

export default MinorProjectCarousel;
