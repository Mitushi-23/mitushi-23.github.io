import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { MinorProject } from "./ProjectInfo";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import './Project.css'

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MinorProjectCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = MinorProject.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
    
      <Box sx={{ maxWidth: 400, margin:"auto"}}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ color: "white" }}
        >
          {MinorProject.map((Project, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
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
                          <Link href={Project.github_link} target="_blank">
                            <GitHubIcon />
                          </Link>
                        </li>
                        <li>
                          <Link href={Project.site_link} target="_blank">
                           
                            <LinkIcon />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div class="details">
                      <h3>{Project.title}</h3>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{  background:"none" }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft  />
              ) : (
                <KeyboardArrowRight/>
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight  />
              ) : (
                <KeyboardArrowLeft  />
              )}
            </Button>
          }
        />
      </Box>
    </>
  );
};

export default MinorProjectCarousel;
