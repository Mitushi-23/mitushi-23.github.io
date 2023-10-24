import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import { Typography } from "@mui/material";
import { experience } from "./WorkExperienceData";
const WorkExperience = () => {
  return (
    <>
      <Typography
        textAlign="center"
        variant="h2"
        fontFamily="var(--poppins)"
        letterSpacing="1.3px"
        fontWeight="bold"
        marginY="2%"
      >
        <span style={{ color: "var(--main-col)" }}>Work</span> Experience
      </Typography>
      <br />
      <VerticalTimeline>
        {experience.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: item.color, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${item.color}` }}
            date={`${item.start_date} - ${item.end_date}`}
            iconStyle={{ background: item.color, color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography
              variant="h6"
              className="vertical-timeline-element-title"
              style={{ fontFamily: "var(--play)", fontWeight: "bold" }}
            >
              {item.role} <br /> {item.organization}
            </Typography>

            <Typography>{item.desc}</Typography>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
